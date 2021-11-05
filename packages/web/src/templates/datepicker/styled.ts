import styled from 'styled-components'

export const Label = styled.label`
  padding: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
`

export const Input = styled.input`
  padding: 0.5rem;
  margin-left: 1rem;
  border: 2px solid #4448;
  border-radius: ${(props) => props.theme.radius};
  background-color: transparent;
`
