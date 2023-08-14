export interface Comic {
  id: number
  title: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

export interface ComicDataWrapper {
  results: Comic[]
}
