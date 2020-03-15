import React from 'react'
import styled from 'styled-components'
import GatsbyBackgroundImage from 'gatsby-background-image'

const StyledBackground = styled(GatsbyBackgroundImage)`
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0, center, center;
  background-attachment: fixed, fixed, fixed;
`

const Background = ({ image, ...props }) => {
  return (
    <StyledBackground
      fluid={[
        'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
        // 'linear-gradient(60deg, rgba(255, 165, 150, .3) 5%,rgba(0, 228, 255, .2))',
        image,
      ]}
      {...props}
    />
  )
}

export default Background
