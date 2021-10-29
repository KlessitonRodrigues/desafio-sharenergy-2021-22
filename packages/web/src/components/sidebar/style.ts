import styled from 'styled-components'

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: ${(props) => props.theme.shadow.lg};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
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
  height: 3.5rem;
  width: 3.5rem;
  margin: 0.5rem;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.colors.surface};
    color: ${(props) => props.theme.colors.onSurface};
  }
`
