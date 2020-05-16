import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotateX(15deg);
    opacity: 0;
  }

  to {
    transform: rotate(0);
    opacity: 1;
  }
`

const Section = styled.section`
  transform-origin: 50% 50%;
  animation: ${rotate} 1s ease;
  padding: 2em 1em;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);
  border-radius: 4px;
  width: 100%;
  position: relative;
  text-align: center;
  max-width: 23em;

  @media (prefers-color-scheme: dark) {
    background: rgba(35, 35, 35, 0.7);
  }
`

export default Section
