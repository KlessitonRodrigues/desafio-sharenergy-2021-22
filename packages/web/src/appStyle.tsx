import React, { PropsWithChildren } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

body {
    font-family: sans-serif;
}
`

const theme = {
  colors: {
    primary: '#FDD835', // yellow 600
    primaryVariant: '#F57F17', // yellow 900
    onPrimary: '#333',
    secondary: '#212121', // gray 900
    onSecondary: '#FFF',
    background: '#EEEEEE', // gray 200
    onBack: '#333',
    surface: '#FAFAFA', // gray 50
    onSurface: '#333'
  },
  shadow: {
    sm: '0 2px 6px #4442',
    md: '0 2px 6px #4446',
    lg: '0 2px 6px #444A'
  },
  fontSize: {
    sm: '.9rem',
    md: '1rem',
    lg: '1.1rem'
  },
  screens: {
    xsm: '320px',
    sm: '380px',
    md: '768px',
    lg: '1024px'
  },
  radius: '0.5rem'
}

export const Theme = (props: PropsWithChildren<{}>) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)
