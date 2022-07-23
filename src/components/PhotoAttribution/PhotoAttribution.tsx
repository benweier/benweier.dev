import { images } from '@/config/unsplash'

interface PhotoAttributionProps {
  image: typeof images[number]
}

export const PhotoAttribution = ({ image }: PhotoAttributionProps) => {
  return (
    <div className="photo-attribution">
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
