import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/future/image'
import { meta } from '@/config/meta'
import { images } from '@/config/unsplash'

const InternalServerError: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ image, year }) => {
  return (
    <>
      <div className="max-w-screen relative min-h-screen bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-200">
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="absolute inset-0 h-full max-h-full w-full object-cover opacity-40 blur-sm"
          />
        )}

        <div className="relative z-10 mx-8 grid min-h-screen grid-flow-row items-center justify-items-center gap-16 py-16 md:py-24 xl:py-32">
          <main className="grid w-full max-w-xs grid-flow-row auto-rows-auto justify-items-center gap-8 rounded-md bg-gray-100/40 p-12 backdrop-blur dark:bg-gray-900/40">
            <div className="text-center text-4xl font-bold">Internal Server Error</div>
          </main>

          <footer className="mx-8 grid w-full grid-flow-row items-center justify-center gap-4 text-center text-sm font-semibold md:grid-flow-col md:gap-8">
            <div>
              &copy; {meta.name} {year}
            </div>
            {image && (
              <div>
                Photo by{' '}
                <a className="underline" href={image.href}>
                  {image.name}
                </a>{' '}
                on{' '}
                <a className="underline" href="https://unsplash.com">
                  Unsplash
                </a>
              </div>
            )}
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

export default InternalServerError
