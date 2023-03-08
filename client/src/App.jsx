/*
  Alternative Syntax

  (1) ComplexTitle

  (***) don't recommended
*/

import styled from 'styled-components'
import ComplexTitle from './components/ComplexTitle'
import Random from './components/Random'

function App() {
  return (
    <Wrapper>
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
