import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  & span {
    font-size: 2.5rem;
  }
`

export const Search = styled.input`
  width: 100%;
  background-color: transparent;
  color: inherit;
  border: none;
  border-bottom: 1px solid #444;
  padding: 0 0.5rem;
  font-size: 1.1rem;
  font-family: monospace;
`
