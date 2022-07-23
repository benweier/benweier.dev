import Image from 'next/future/image'
import { images } from '@/config/unsplash'

interface BackgroundImageProps {
  image: typeof images[number]
}

export const BackgroundImage = ({ image }: BackgroundImageProps) => {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className="full-page-background absolute inset-0 h-full max-h-full w-full max-w-full object-cover opacity-40 blur-sm"
    />
  )
}
