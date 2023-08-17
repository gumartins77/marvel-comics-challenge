import { detailCharacter } from '@/utils/api'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CharacterPageProps {
  params: {
    id: string
  }
}

const CharacterPage: FC<CharacterPageProps> = async ({ params }) => {
  const { id } = params
  const character = await detailCharacter(id)
  const { thumbnail, name, description, comics, series, events } =
    character.results[0]

  return (
    <div className="container flex flex-col md:flex-row gap-5 items-center">
      <div className="md:w-1/2">
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name}
          width={500}
          height={400}
        />
        <Link href={`character-comics/${id}`} className="btn btn-primary">
          Comics
        </Link>
      </div>
      <div className="md:w-1/2 max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <p className="text-sm font-light">{description}</p>
        <div className="my-6">
          <h2 className="text-xl font-semibold mb-2">
            Histórias em Quadrinhos:
          </h2>
          <p className="text-sm font-light">{comics.available}</p>
        </div>
        <div className="my-6">
          <h2 className="text-xl font-semibold mb-2">Séries:</h2>
          <ul className="list-disc list-inside">
            {series.items.map((serie) => (
              <li className="text-sm font-light" key={serie.name}>
                {serie.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="my-6">
          <h2 className="text-xl font-semibold mb-2">Eventos:</h2>
          <ul className="list-disc list-inside">
            {events.items.map((event) => (
              <li className="text-sm font-light" key={event.name}>
                {event.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterPage
