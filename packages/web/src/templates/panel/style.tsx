import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  0%{
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.radius};
  position: fixed;
  padding: 1rem;
  width: 100%;
  height: 90%;
  top: 4.5rem;
  overflow-y: auto;
  animation: ${slideUp} 0.6s;

  @media (min-width: ${(props) => props.theme.screens.md}) {
    box-shadow: ${(props) => props.theme.shadow.lg};
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
  font-size: 1.5rem;
  text-align: center;
  @media (min-width: ${(p) => p.theme.screens.md}) {
    text-align: left;
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`
