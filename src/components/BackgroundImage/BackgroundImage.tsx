import Image from 'next/future/image'
import { UnsplashImage } from '@/config/unsplash'

interface BackgroundImageProps {
  image: UnsplashImage
}

export const BackgroundImage = ({ image }: BackgroundImageProps) => {
  return (
    <div className="absolute h-full min-h-screen w-screen min-w-full max-w-full">
      <Image
        id="background-image"
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        quality={80}
        placeholder="blur"
        blurDataURL={image.blurDataURL}
        className="h-full w-full object-cover object-center opacity-40 blur-sm"
      />
    </div>
  )
}
