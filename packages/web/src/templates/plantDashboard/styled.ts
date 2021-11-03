import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: ${(props) => props.theme.shadow.md};
  border-radius: ${(props) => props.theme.radius};
  padding: 1rem;
  margin: 0.5rem;
`

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h3`
  text-transform: capitalize;
  margin-bottom: 1rem;
  opacity: 0.8;
`

export const Production = styled.div`
  font-size: 0.9rem;
`
