import { Comic } from '@/types/comics'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface ComicCardProps {
  comic: Comic
}

const ComicCard: FC<ComicCardProps> = ({ comic }) => {
  return (
    <div className="card w-full bg-base-200 shadow-xl">
      <figure>
        <Image
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
          width={500}
          height={400}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{comic.title}</h2>
        <div className="card-actions justify-end">
          <Link href={`comic/${comic.id}`} className="btn btn-primary">
            Detail
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ComicCard
