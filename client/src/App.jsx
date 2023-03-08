/*
  More Complex Component P2

  (1) components/ComplexTitle.js

  (***) same class name, but no collision

*/

import styled from 'styled-components'
import ComplexTitle from './components/ComplexTitle'
import Random from './components/Random'

function App() {
  return (
    <Wrapper>
      <ComplexTitle title='Hello World' />
      <Random title='Bye' />
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
