import ComicCard from '@/Components/ComicCard'
import { comicsByCharacter } from '@/utils/api'
import { FC } from 'react'

interface ComicCharacter {
  params: {
    id: string
  }
}

const CharacterComics: FC<ComicCharacter> = async ({ params }) => {
  const { id } = params
  const comics = await comicsByCharacter(id)

  return (
    <main>
      <div className="container text-center mt-10">
        <h1 className="text-3xl font-bold underline">Comics Marvels</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10">
          {comics.results.map((comics) => (
            <ComicCard key={comics.id} comic={comics} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default CharacterComics
