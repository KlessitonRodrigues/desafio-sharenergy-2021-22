import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Container = styled.div`
  margin-bottom: 1rem;
`

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
`

export const Selection = styled.div`
  background-color: ${(p) => p.theme.colors.primaryVariant};
  color: ${(p) => p.theme.colors.onPrimary};
  border-radius: ${(p) => p.theme.radius};
  box-shadow: ${(p) => p.theme.shadow.sm};
  padding: 0.5rem;
  margin: 0.25rem;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  animation: ${slideUp} 1s;
`
