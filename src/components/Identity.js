import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { Avatar, Header, Heading, Text } from './styled'

const Identity = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          authorName
          authorTitle
        }
      }
      avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 128) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Header>
      <Avatar>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt="Avatar"
          loading="eager"
          style={{ overflow: 'initial' }}
        />
      </Avatar>
      <Heading as="h1">{data.site.siteMetadata.authorName}</Heading>
      <Text as="p">{data.site.siteMetadata.authorTitle}</Text>
    </Header>
  )
}

export default Identity
