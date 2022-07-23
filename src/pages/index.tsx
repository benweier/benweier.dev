import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Avatar } from '@/components/Avatar'
import { BackgroundImage } from '@/components/BackgroundImage'
import { Links } from '@/components/Links'
import { PhotoAttribution } from '@/components/PhotoAttribution'
import { meta } from '@/config/meta'
import { images } from '@/config/unsplash'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ image, year }) => {
  return (
    <>
      <div className="max-w-screen relative min-h-screen bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-200">
        <BackgroundImage image={image} />

        <div className="relative z-10 mx-8 grid min-h-screen grid-flow-row items-center justify-items-center gap-8 py-16 md:gap-16 md:py-24 xl:py-32">
          <main className="grid w-full max-w-xs grid-flow-row justify-items-center gap-8 rounded-md bg-gray-100/40 p-12 backdrop-blur dark:bg-gray-900/40">
            <div className="rounded-full bg-gray-900/5 p-5 dark:bg-gray-100/10">
              <Avatar />
            </div>

            <div className="text-center">
              <h1 className="text-4xl font-bold">{meta.name}</h1>
              <p className="text-lg font-light uppercase">{meta.role}</p>
            </div>

            <div className="grid grid-flow-col items-center justify-between gap-8">
              <Links />
            </div>
          </main>

          <footer className="mx-8 grid w-full grid-flow-row items-center justify-center gap-4 text-center text-sm font-semibold md:grid-flow-col md:gap-8">
            <div>
              &copy; {meta.name} {year}
            </div>

            <PhotoAttribution image={image} />
          </footer>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<{
  image: typeof images[number]
  year: number
}> = async () => {
  const index = Math.floor(Math.random() * images.length)

  return {
    props: {
      image: images[index],
      year: new Date().getFullYear(),
    },
    revalidate: 60,
  }
}

export default Home
