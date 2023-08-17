export interface Comic {
  id: number
  title: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  pageCount: number
  format: string
  prices: {
    type: string
    price: number
  }[]
  creators: {
    items: { name: string }[]
  }
  characters: {
    items: { name: string }[]
  }
}

export interface ComicDataWrapper {
  results: Comic[]
}
