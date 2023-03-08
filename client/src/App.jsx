/*
  Theming P1
*/

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './global-styles'
import { useState } from 'react'

// (1)
const BaseTheme = {
  color: '#222',
  background: '#fff',
}
const DarkTheme = {
  color: '#fff',
  background: '#222',
}

// (3)
const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
`

function App() {
  // (2) wrap
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyles />

      {/* (4) */}
      <Container>
        <h1>Hello World</h1>
        <button className='btn'>Toggle Me</button>
      </Container>
    </ThemeProvider>
  )
}

const Wrapper = styled.section`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  gap: 1rem;
  background-color: #eff1f5;
  min-height: 100vh;
`

export default App
