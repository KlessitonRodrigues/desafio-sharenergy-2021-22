import styled from 'styled-components'

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.onSecondary};
  box-shadow: ${(props) => props.theme.shadow.lg};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: ${(props) => props.theme.screens.md}) {
    flex-direction: column;
    height: 100%;
    width: auto;
  }
`

export const Button = styled.button`
  color: ${(props) => props.theme.colors.onSecondary};
  border-radius: ${(props) => props.theme.radius};
  background-color: transparent;
  border: none;
  height: 3rem;
  width: 3rem;
  margin: 0.5rem;
  transition: .5s;
  &.--active {
    background-color: ${(props) => props.theme.colors.surface};
    color: ${(props) => props.theme.colors.onSurface};
  }
`
