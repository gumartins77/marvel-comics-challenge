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
  const { thumbnail, title, description } = comic.results[0]

  return (
    <div className="container flex flex-col gap-5 items-center">
      <Image
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={title}
        width={500}
        height={400}
      />
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-sm font-light">{description}</p>
      </div>
    </div>
  )
}

export default ComicPage
