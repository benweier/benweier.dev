import styled from 'styled-components'

const Text = styled.div`
  font-size: 1em;
  line-height: 1;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  padding: 0.5rem 0;
  color: #313f47;

  @media (prefers-color-scheme: dark) {
    color: whitesmoke;
  }
`

export default Text
