import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.onSurface};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow.md};
  padding: 1rem;
  margin: 0 auto;
  width: 22rem;
`

export const Title = styled.h2`
  opacity: 0.8;
  font-size: 1.75rem;
  margin-bottom: 1rem;
`

export const Text = styled.p`
  font-size: 1rem;
`
