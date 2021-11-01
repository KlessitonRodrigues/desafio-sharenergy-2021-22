import styled, { keyframes } from 'styled-components'

const zoomIn = keyframes`
  0% {
    border-radius: 50%;
    transform: scale(0.1)
  }
  100% {
    border-radius: 0;
    transform: scale(1);
  }
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background-color: #000b;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${zoomIn} 0.2s;
  & .icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  & .icon.--error {
    color: #b71c1c;
  }
`
