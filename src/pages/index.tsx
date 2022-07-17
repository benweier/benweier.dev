import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import { IconContext } from 'react-icons'
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { meta } from '@/config/meta'
import { images } from '@/config/unsplash'
import avatar from '@/images/avatar.png'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ image, year }) => {
  return (
    <>
      <Head>
        <title>
          {meta.name} :: {meta.role}
        </title>
        <meta name="description" content={meta.description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:site_name" content={meta.site} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={meta.name} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:url" content={meta.url} />
        <meta name="twitter:site" content={meta.creator} />
      </Head>

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
          <main className="grid w-full max-w-xs grid-flow-row justify-items-center gap-8 rounded-md bg-gray-100/40 p-12 backdrop-blur dark:bg-gray-900/40">
            <div className="rounded-full bg-gray-900/5 p-5 dark:bg-gray-100/10">
              <Image
                src={avatar}
                alt="Stylised avatar of Ben Weier"
                width={132}
                height={132}
                className="rounded-full shadow-[0_0_10px_-5px_rgba(0,0,0,0.4)]"
                placeholder="blur"
                sizes="132px"
              />
            </div>

            <div className="text-center">
              <h1 className="text-4xl font-bold">{meta.name}</h1>
              <p className="text-lg font-light uppercase">{meta.role}</p>
            </div>

            <div className="grid grid-flow-col items-center justify-between gap-8">
              <IconContext.Provider value={{ size: '28', color: 'currentColor' }}>
                <a href="https://github.com/benweier" aria-label="GitHub" className="p-2" title="GitHub">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/benweier" aria-label="Twitter" className="p-2" title="Twitter">
                  <FaTwitter />
                </a>
                <a href="mailto:web@benweier.dev" aria-label="Email" className="p-2" title="Email">
                  <FaEnvelope />
                </a>
              </IconContext.Provider>
            </div>
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

export default Home
