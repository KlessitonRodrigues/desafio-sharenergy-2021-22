import styled from 'styled-components'

export const Container = styled.div``

export const Row = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  align-items: center;
  padding: 0 0.5rem;
  @media (min-width: ${(p) => p.theme.screens.md}) {
    grid-template-columns: 8fr 2fr;
  }

  & span {
    font-size: 2rem;
    cursor: pointer;
    margin: 0 0.5rem;
  }
`

export const FormContainer = styled.div`
  border: 2px solid #4446;
  border-radius: ${(p) => p.theme.radius};
  margin: 1rem 0;
  padding: 1rem;
`

export const Grid = styled.div`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  @media (min-width: ${(p) => p.theme.screens.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
