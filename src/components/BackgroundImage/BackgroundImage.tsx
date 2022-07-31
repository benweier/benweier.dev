import Image from 'next/future/image'
import { UnsplashImage } from '@/config/unsplash'

interface BackgroundImageProps {
  image: UnsplashImage
}

export const BackgroundImage = ({ image }: BackgroundImageProps) => {
  return (
    <Image
      id="background-image"
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      quality={80}
      className="absolute h-full max-h-full min-h-screen w-full min-w-full max-w-full object-cover object-center opacity-40 blur-sm"
    />
  )
}
