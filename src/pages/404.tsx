import { GetStaticProps } from 'next'
import { images } from '@/config/unsplash'
import Error, { ErrorPageProps } from './_error'

export const getStaticProps: GetStaticProps<ErrorPageProps> = async () => {
  const index = Math.floor(Math.random() * images.length)

  return {
    props: {
      title: 'Not Found',
      image: images[index],
      year: new Date().getFullYear(),
    },
    revalidate: 60,
  }
}

export default Error
