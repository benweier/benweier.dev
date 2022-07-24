import { NextIntlProvider } from 'next-intl'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { meta } from '@/config/meta'
import '@/styles/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextIntlProvider messages={pageProps.messages}>
        <DefaultSeo
          title={`${meta.name} :: ${meta.role}`}
          description={meta.description}
          openGraph={{
            type: 'website',
            title: meta.name,
            description: meta.description,
            url: meta.url,
            images: [{ url: meta.image }],
            site_name: meta.site,
          }}
          twitter={{
            handle: meta.creator,
            cardType: 'summary',
            site: meta.creator,
          }}
        />
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  )
}

export default App
