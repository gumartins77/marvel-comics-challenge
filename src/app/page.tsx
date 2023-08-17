import Image from 'next/image'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <div className="card w-full bg-base-200 shadow-xl">
      <figure>
        <Image
          src={`/img/marvel.jpg`}
          alt="Marvel-Logo"
          width={500}
          height={400}
        />
      </figure>
    </div>
  )
}

export default Home
