import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
`

export const Title = styled.b`
  opacity: ${(props: { show: boolean }) => (props.show ? 0.8 : 0)};
  font-weight: bold;
  transition: opacity 0.6s;
`

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 0;
  border-bottom: 3px solid #0004;
  padding: 0.5rem 0;
  font-size: ${(props) => props.theme.fontSize.md};
`
