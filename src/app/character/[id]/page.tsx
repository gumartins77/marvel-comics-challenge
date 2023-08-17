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
    <>
      <head>
        <title>Character</title>
      </head>
      <div className="container mx-auto px-4 py-8 md:flex gap-8">
        <div className="md:w-1/2">
          <Image
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={name}
            width={500}
            height={400}
            className="rounded-md shadow-xl"
          />
          <Link
            href={`../character-comics/${id}`}
            className="btn btn-primary mt-4"
          >
            Comics
          </Link>
        </div>
        <div className="md:w-1/2 max-w-4xl mx-auto text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{name}</h1>
          <p className="text-lg font-light text-gray-600 mb-6">{description}</p>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Histórias em Quadrinhos:
            </h2>
            <p className="text-base font-light text-gray-600">
              {comics.available}
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Séries:
            </h2>
            <ul className="list-disc list-inside pl-6">
              {series.items.map((serie) => (
                <li
                  className="text-base font-light text-gray-600"
                  key={serie.name}
                >
                  {serie.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Eventos:
            </h2>
            <ul className="list-disc list-inside pl-6">
              {events.items.map((event) => (
                <li
                  className="text-base font-light text-gray-600"
                  key={event.name}
                >
                  {event.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CharacterPage
