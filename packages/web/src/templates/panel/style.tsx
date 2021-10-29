import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  box-shadow: ${(props) => props.theme.shadow.lg};
  border-radius: ${(props) => props.theme.radius};
  position: fixed;
  padding: 1rem;
  width: 96%;
  height: 84%;
  left: 2%;
  top: 5.5rem;
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
