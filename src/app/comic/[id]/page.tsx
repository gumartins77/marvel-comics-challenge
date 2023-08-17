import { detailComic } from '@/utils/api'
import { FC } from 'react'
import Image from 'next/image'

interface ComicPageProps {
  params: {
    id: string
  }
}

const ComicPage: FC<ComicPageProps> = async ({ params }) => {
  const { id } = params
  const comic = await detailComic(id)
  const {
    thumbnail,
    title,
    description,
    pageCount,
    format,
    prices,
    creators,
    characters,
  } = comic.results[0]

  return (
    <div className="container flex flex-col md:flex-row gap-5 items-center">
      <div className="md:w-1/2">
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={title}
          width={500}
          height={400}
        />
      </div>
      <div className="md:w-1/2 max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-sm font-light">{description}</p>
        <p className="text-sm mt-2">
          <strong>Page Count:</strong> {pageCount}
        </p>
        <p className="text-sm">
          <strong>Format:</strong> {format}
        </p>
        <div className="mt-2">
          <strong>Prices:</strong>
          <ul className="list-disc list-inside">
            {prices.map((price, index) => (
              <li key={index}>
                {price.type}: ${price.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <strong>Creators:</strong>
          <ul className="list-disc list-inside">
            {creators.items.map((creator, index) => (
              <li key={index}>{creator.name}</li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <strong>Characters:</strong>
          <ul className="list-disc list-inside">
            {characters.items.map((character, index) => (
              <li key={index}>{character.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ComicPage
