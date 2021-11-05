import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  @media (min-width: ${(p) => p.theme.screens.md}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${(p) => p.theme.screens.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Plant = styled.div`
  border: 1px solid ${(p) => p.theme.colors.secondary};
  border-radius: ${(p) => p.theme.radius};
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin: 0.5rem;
  & span {
    cursor: pointer;
  }
`

export const Title = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  justify-self: flex-start;
`
