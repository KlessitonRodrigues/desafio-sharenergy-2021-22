import styled from 'styled-components'

type Props = {
  imgSize: { sm?: string; md?: string; lg?: string }
}

export const Container = styled.img`
  width: 100%;
  margin: 0 auto;
  filter: drop-shadow(0 4px 4px #0006);
  @media (min-width: ${(props) => props.theme.screens.sm}) {
    width: ${(props: Props) => props.imgSize.sm};
  }
  @media (min-width: ${(props) => props.theme.screens.md}) {
    width: ${(props: Props) => props.imgSize.md};
  }
  @media (min-width: ${(props) => props.theme.screens.lg}) {
    width: ${(props: Props) => props.imgSize.lg};
  }
`
