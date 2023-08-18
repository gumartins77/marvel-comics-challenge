import Image from 'next/image'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <head>
        <title>Home</title>
      </head>
      <div className="card w-full bg-base-200 shadow-xl">
        <figure style={{ width: '100%', height: '100%' }}>
          <Image
            src="/img/marvel.jpg"
            alt="Marvel-Logo"
            layout="responsive"
            objectFit="cover"
            width={1920}
            height={1080}
          />
        </figure>
      </div>
    </div>
  )
}

export default Home
