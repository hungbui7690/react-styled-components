/*
  Media Queries - Hover & Pseudo Element

  (1) components/Card.jsx
*/

import styled from 'styled-components'
import Card from './components/Card'

function App() {
  return (
    <Wrapper>
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
