/*
  More Complex Component P1

  (1) create components/ComplexTitle.js

*/

import styled from 'styled-components'

// (2a)
import ComplexTitle from './components/ComplexTitle'

function App() {
  return (
    <Wrapper>
      {/* (2b) */}
      <ComplexTitle title='Hello World' />
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
`

export default App
