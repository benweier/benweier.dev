import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Anchor } from './styled'

const Footer = styled.footer`
  align-self: flex-end;
  width: 100%;
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.11em;
`

const FooterList = styled.ul`
  color: #fff;
`

const FooterItem = styled.li`
  display: inline-block;
  margin: 0 0.3em;
  padding: 0 0.3em;
  line-height: 1.3;
`

const PageFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          authorName
        }
      }
    }
  `)

  return (
    <Footer>
      <FooterList>
        <FooterItem>&copy; {data.site.siteMetadata.authorName}</FooterItem>
        <FooterItem>
          Design: <Anchor href="http://html5up.net">HTML5 UP</Anchor>
        </FooterItem>
        <FooterItem>
          Photo:{' '}
          <Anchor href="https://unsplash.com/@cikstefan">
            Štefan Štefančík
          </Anchor>
        </FooterItem>
      </FooterList>
    </Footer>
  )
}

export default PageFooter
