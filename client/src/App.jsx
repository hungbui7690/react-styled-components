/*
  CSS Variables
  - 2 ways: 
    + CSS
    + Utils Approach
  - this lesson, we work with CSS way.


  
  (1) index.css

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

  /* (2) */
  background-color: var(--primaryColor);
`

export default App
