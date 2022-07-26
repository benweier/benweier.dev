import { Anchor } from '@/components/Anchor'
import { UnsplashImage } from '@/config/unsplash'

interface PhotoAttributionProps {
  image: UnsplashImage
}

export const PhotoAttribution = ({ image }: PhotoAttributionProps) => {
  return (
    <div id="photo-attribution">
      Photo by <Anchor href={image.href}>{image.name}</Anchor> on <Anchor href="https://unsplash.com">Unsplash</Anchor>
    </div>
  )
}
