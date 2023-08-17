export interface Character {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  comics: {
    available: number
  }
  series: {
    items: { name: string }[]
  }
  events: {
    items: { name: string }[]
  }
}

export interface CharacterDataWrapper {
  realName: string
  results: Character[]
}
