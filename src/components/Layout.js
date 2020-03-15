import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, Background, Wrapper } from './styled'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          authorTitle
          description
          siteUrl
        }
      }
      bg: file(
        relativePath: { eq: "stefan-stefancik--g7axSVst6Y-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={`${data.site.siteMetadata.title} :: ${data.site.siteMetadata.authorTitle}`}
        meta={[
          {
            name: 'description',
            content: data.site.siteMetadata.description,
          },
          {
            property: 'og:title',
            content: data.site.siteMetadata.title,
          },
          {
            property: 'og:description',
            content: data.site.siteMetadata.description,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:title',
            content: data.site.siteMetadata.title,
          },
          {
            name: 'twitter:description',
            content: data.site.siteMetadata.description,
          },
          {
            name: 'twitter:url',
            content: data.site.siteMetadata.siteUrl,
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Global background={data.bg.childImageSharp.fluid.base64} />
      <Background image={data.bg.childImageSharp.fluid}>
        <Wrapper>{children}</Wrapper>
      </Background>
    </>
  )
}

export default Layout
