'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, KeyboardEvent, useState } from 'react'

const Navbar: FC = () => {
  const router = useRouter()
  const [querySearch, setQuerySearch] = useState<string>('')

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && querySearch.trim() !== '') {
      setQuerySearch('')
      router.push(`/search?query=${querySearch}`)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="navbar bg-base-100 container">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Home
          </Link>
          <Link
            href="/characters"
            className="btn btn-ghost normal-case text-xl"
          >
            Marvel Characters
          </Link>
          <Link href="/comics" className="btn btn-ghost normal-case text-xl">
            Marvel Comics
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              value={querySearch}
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              onChange={(e) => setQuerySearch(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
