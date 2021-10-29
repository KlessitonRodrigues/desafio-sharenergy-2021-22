import React from 'react'

import PowerPlantImg from '../../assets/img/img2.png'
import LoginForm from '../../components/loginForm/index'
import Img from '../../templates/img/index'
import Section1 from './sections/section1'
import { Container, Title, FlexRow, TextBox, Display } from './style'

const Login = () => (
  <Container>
    <Display>
      <header>
        <Title>Sharenergy</Title>
      </header>
      <FlexRow>
        <div>
          <Img src={PowerPlantImg} alt="image" md="30rem" lg="45rem" />
          <TextBox>
            &ldquo;Ajude-nos a criar um mundo mais sustentável&rdquo;
          </TextBox>
        </div>
        <LoginForm />
      </FlexRow>
      <TextBox>Saiba mais abaixo</TextBox>
    </Display>
    <Section1 />
  </Container>
)

export default Login
