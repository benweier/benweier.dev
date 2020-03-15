import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    box-sizing: border-box;
    background-image: ${({ background }) => `url(${background})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  }
`

export default Global
