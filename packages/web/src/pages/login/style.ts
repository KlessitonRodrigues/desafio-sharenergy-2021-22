import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.onPrimary};
`

export const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  padding: 1rem 0;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  @media (min-width: ${(props) => props.theme.screens.md}) {
    flex-direction: row;
    align-items: center;
  }
`

export const TextBox = styled.p`
  padding: 1rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
`

export const Display = styled.div`
  min-height: 100vh;
`
