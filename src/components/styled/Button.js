import styled from 'styled-components'

const Button = styled.a`
  display: block;
  color: inherit;
  border-radius: 100%;
  line-height: 0;
  padding: 0.33em;
  transition: background-color 100ms ease;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.08);

    @media (prefers-color-scheme: dark) {
      background-color: rgba(255, 255, 255, 0.18);
    }
  }

  svg {
    margin: 0.5em;
  }
`

export default Button
