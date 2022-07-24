import { UnsplashImage } from '@/config/unsplash'

interface PhotoAttributionProps {
  image: UnsplashImage
}

export const PhotoAttribution = ({ image }: PhotoAttributionProps) => {
  return (
    <div id="photo-attribution">
      Photo by{' '}
      <a className="underline" href={image.href}>
        {image.name}
      </a>{' '}
      on{' '}
      <a className="underline" href="https://unsplash.com">
        Unsplash
      </a>
    </div>
  )
}
