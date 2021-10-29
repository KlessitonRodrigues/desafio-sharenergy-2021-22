import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.onSecondary};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.shadow.md};
  font-size: ${(props) => props.theme.fontSize.md};
  font-family: monospace;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: ${(props) => props.theme.shadow.lg};
  }
`
