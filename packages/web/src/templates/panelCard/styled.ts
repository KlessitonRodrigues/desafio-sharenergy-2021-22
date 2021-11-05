import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Title = styled.h3`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  font-size: 1.1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.onSecondary};
  border-radius: ${(props) => props.theme.radius};
  @media (min-width: ${(p) => p.theme.screens.md}) {
    text-align: left;
  }
`
