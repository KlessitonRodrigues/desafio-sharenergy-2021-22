import styled from 'styled-components'

export const Container = styled.form`
  width: 22rem;
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.onSurface};
  box-shadow: ${(props) => props.theme.shadow.md};
  border-radius: ${(props) => props.theme.radius};
  padding: 1rem;
  margin: auto;
  @media (min-width: ${(props) => props.theme.screens.lg}) {
    width: 30rem;
  }
`
