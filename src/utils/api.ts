import { ComicDataWrapper } from '@/types/comics'
import { CharacterDataWrapper } from '@/types/marvels'
import md5 from 'md5'
// import { getHash } from 'next/dist/server/image-optimizer'

const API_BASE_URL = 'https://gateway.marvel.com/v1/public'
const API_PUBLIC_KEY = 'bbda4421abb1b402e16e5074ec01db00'
const API_PRIVATE_KEY = 'd567ffcdd585188b8b57674e288a1c95c26788a3'

const getTimeStamp = () => Date.now().toString()
const getHash = (timeStamp: string) =>
  md5(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY)

const timeStamp = getTimeStamp()
const hash = getHash(timeStamp)
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`

const handleResponse = async <T>(response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data.data as T
}

export const getCharacters = async (): Promise<CharacterDataWrapper> => {
  const url = `${API_BASE_URL}/characters?${query}`
  const response = await fetch(url)
  return handleResponse<CharacterDataWrapper>(response)
}

export const detailCharacter = async (
  characterId: string,
): Promise<CharacterDataWrapper> => {
  const url = `${API_BASE_URL}/characters/${characterId}?${query}`
  const response = await fetch(url)
  return handleResponse<CharacterDataWrapper>(response)
}

export const searchCharacters = async (
  querySearch: string | null,
): Promise<CharacterDataWrapper> => {
  const url = `${API_BASE_URL}/characters?nameStartsWith=${querySearch}&limit=99&${query}`
  const response = await fetch(url)
  return handleResponse<CharacterDataWrapper>(response)
}

export const getComics = async (): Promise<ComicDataWrapper> => {
  const url = `${API_BASE_URL}/comics?${query}`
  const response = await fetch(url)
  return handleResponse<ComicDataWrapper>(response)
}

export const detailComic = async (
  comicId: string,
): Promise<ComicDataWrapper> => {
  const url = `${API_BASE_URL}/comics/${comicId}?${query}`
  const response = await fetch(url)
  return handleResponse<ComicDataWrapper>(response)
}
