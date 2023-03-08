/*
  Global Styles (Alternative)
  - b4, we use index.css to setup global styles (recommended)
  - this lesson, we learn how to setup global styles with JS


  (1) main.jsx > comment import index.css
  (2) create global-styles.[js]
*/

import styled from 'styled-components'
import Card from './components/Card'

// (4)
import GlobalStyles from './global-styles'

function App() {
  return (
    <Wrapper>
      {/* (5) */}
      <GlobalStyles />
      <Card />
    </Wrapper>
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
