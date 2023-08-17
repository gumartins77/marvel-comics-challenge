import Image from 'next/image'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <div className="card w-full bg-base-200 shadow-xl">
      <figure style={{ width: '100vw', height: '100vh', margin: 0 }}>
        <Image
          src={`/img/marvel.jpg`}
          alt="Marvel-Logo"
          layout="fill"
          objectFit="cover"
        />
      </figure>
    </div>
  )
}

export default Home
