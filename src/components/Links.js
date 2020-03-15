import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { Icons, Button } from './styled'

const Links = () => {
  return (
    <IconContext.Provider value={{ size: 28, color: '#313f47' }}>
      <Icons>
        <Button href="https://github.com/benweier" aria-label="GitHub">
          <FaGithub />
        </Button>
        <Button href="https://twitter.com/benweier" aria-label="Twitter">
          <FaTwitter />
        </Button>
        <Button href="mailto:web@benweier.dev" aria-label="Email">
          <FaEnvelope />
        </Button>
      </Icons>
    </IconContext.Provider>
  )
}

export default Links
