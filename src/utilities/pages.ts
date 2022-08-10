import fs from 'fs'
import path from 'path'
import { UnsplashImage } from '@/config/unsplash'

export const getMessages = async (locale: string): Promise<any> => {
  const file = path.resolve(process.cwd(), 'public', 'intl', `${locale}.json`)
  const contents = await fs.promises.readFile(file, 'utf-8')
  const messages = JSON.parse(contents)

  return messages
}

export const getImage = async (locale: string): Promise<UnsplashImage> => {
  const file = path.resolve(process.cwd(), 'public', 'unsplash', locale, 'conf.json')
  const contents = await fs.promises.readFile(file, 'utf-8')
  const images: UnsplashImage[] = JSON.parse(contents)
  const index = Math.floor(Math.random() * images.length)

  return images[index]
}
