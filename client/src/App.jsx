/*
  Theming P2: Toggle Theme
*/

import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './global-styles'
import { useState } from 'react'

const BaseTheme = {
  color: '#222',
  background: '#fff',
}
const DarkTheme = {
  color: '#fff',
  background: '#222',
}

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};

  .btn {
    color: crimson;
    background-color: white;
    border: 1px solid crimson;
  }
`

function App() {
  // (1)
  const [baseTheme, setBaseTheme] = useState(DarkTheme)

  // (3)
  const toggleTheme = () => {
    const theme = baseTheme === DarkTheme ? BaseTheme : DarkTheme
    setBaseTheme(theme)
  }

  // (2)
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />

      <Container>
        <h1>Hello World</h1>
        <button
          onClick={toggleTheme} // (4)
          className='btn'
        >
          Toggle Me
        </button>
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
