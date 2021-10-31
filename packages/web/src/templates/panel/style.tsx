import styled, { keyframes } from 'styled-components'

const panelSlide = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  box-shadow: ${(props) => props.theme.shadow.lg};
  border-radius: ${(props) => props.theme.radius};
  position: fixed;
  padding: 1rem;
  width: 96%;
  height: 86%;
  left: 2%;
  top: 5.5rem;
  overflow-y: auto;
  animation: ${panelSlide} 0.5s ease-out;

  @media (min-width: ${(props) => props.theme.screens.md}) {
    top: 3%;
    left: 5.5rem;
    width: 86%;
    height: 94%;
  }
  @media (min-width: ${(props) => props.theme.screens.lg}) {
    width: 90%;
  }
`

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.onSurface};
  margin-bottom: 1rem;
  font-size: 2rem;
  font-family: monospace;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`
