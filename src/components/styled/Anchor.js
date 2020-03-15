import styled from 'styled-components'

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  border-bottom: 1px dotted currentColor;

  &:hover,
  &:focus {
    color: hotpink;
  }
`

export default Anchor
