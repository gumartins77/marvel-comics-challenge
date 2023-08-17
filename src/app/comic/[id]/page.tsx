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
    <>
      <head>
        <title>Comic</title>
      </head>
      <div className="container mx-auto px-4 py-8 md:flex gap-8">
        <div className="md:w-1/2">
          <Image
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={title}
            width={500}
            height={400}
            className="rounded-md shadow-xl"
          />
        </div>
        <div className="md:w-1/2 max-w-4xl mx-auto text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{title}</h1>
          <p className="text-lg font-light text-gray-600 mb-4">{description}</p>
          <p className="text-base font-light text-gray-600">
            <strong>Page Count:</strong> {pageCount}
          </p>
          <p className="text-base font-light text-gray-600">
            <strong>Format:</strong> {format}
          </p>
          <div className="mt-4">
            <strong>Prices:</strong>
            <ul className="list-disc list-inside pl-6">
              {prices.map((price, index) => (
                <li className="text-base font-light text-gray-600" key={index}>
                  {price.type}: ${price.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <strong>Creators:</strong>
            <ul className="list-disc list-inside pl-6">
              {creators.items.map((creator, index) => (
                <li className="text-base font-light text-gray-600" key={index}>
                  {creator.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <strong>Characters:</strong>
            <ul className="list-disc list-inside pl-6">
              {characters.items.map((character, index) => (
                <li className="text-base font-light text-gray-600" key={index}>
                  {character.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComicPage
