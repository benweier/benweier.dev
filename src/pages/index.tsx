import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useTranslations } from 'next-intl'
import { NextSeo } from 'next-seo'
import { Avatar } from '@/components/Avatar'
import { BackgroundImage } from '@/components/BackgroundImage'
import { Links } from '@/components/Links'
import { LocaleSelect } from '@/components/LocaleSelect'
import { PhotoAttribution } from '@/components/PhotoAttribution'
import { meta } from '@/config/meta'
import { UnsplashImage } from '@/config/unsplash'
import { getImage, getMessages } from '@/utilities/pages'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ image, year }) => {
  const t = useTranslations('meta')

  return (
    <>
      <NextSeo
        description={t('description')}
        openGraph={{
          description: t('description'),
        }}
      />
      <div className="max-w-screen relative min-h-screen bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-200">
        <BackgroundImage key={image.src} image={image} />

        <div className="relative z-10 grid min-h-screen grid-flow-row items-center justify-items-center gap-8 px-8 py-16 md:gap-16 md:py-24 xl:py-32">
          <main className="grid w-full max-w-xs grid-flow-row justify-items-center gap-8 rounded-md bg-gray-100/40 p-12 backdrop-blur dark:bg-gray-900/40">
            <div className="rounded-full bg-gray-900/5 p-5 dark:bg-gray-100/10">
              <Avatar />
            </div>

            <div className="text-center">
              <h1 className="text-4xl font-bold">{meta.name}</h1>
              <p className="text-lg font-light uppercase">{meta.role}</p>
            </div>

            <Links />
          </main>

          <footer className="mx-8 grid w-full grid-flow-row items-center justify-center gap-4 text-center text-sm font-semibold md:grid-flow-col md:gap-8">
            <div>
              &copy; {meta.name} {year}
            </div>

            <PhotoAttribution image={image} />
          </footer>

          <LocaleSelect />
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<{
  image: UnsplashImage
  year: number
}> = async ({ locale = 'en' }) => {
  const image = await getImage(locale)
  const messages = await getMessages(locale)

  return {
    props: {
      image,
      year: new Date().getFullYear(),
      messages,
    },
    revalidate: 60,
  }
}

export default Home
