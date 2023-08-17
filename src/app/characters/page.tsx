import CharacterCard from '@/Components/CharacterCard'
import { getCharacters } from '@/utils/api'

export default async function Home() {
  const characters = await getCharacters()

  return (
    <>
      <head>
        <title>Characters</title>
      </head>
      <main>
        <div className="container text-center mt-10">
          <h1 className="text-3xl font-bold underline">Characters Marvels</h1>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10">
            {characters.results.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
