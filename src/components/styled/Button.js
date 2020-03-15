import styled from 'styled-components'

const Button = styled.a`
  display: block;
  color: inherit;
  border-radius: 100%;
  line-height: 0;
  padding: 0.33em;
  transition: background-color 0.2s ease;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.08);
  }

  svg {
    margin: 0.5em;
  }
`

export default Button
