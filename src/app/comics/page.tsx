import ComicCard from '@/Components/ComicCard'
import { getComics } from '@/utils/api'

export default async function Home() {
  const comics = await getComics()

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
