/*
  Global Classes

  (1) index.css

*/

import styled from 'styled-components'
import ComplexTitle from './components/ComplexTitle'
import Random from './components/Random'

function App() {
  return (
    // (2) this one is easy to overwrite > see below
    <Wrapper className='bg-grey'>
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

  /* (3) */
  background-color: lightblue;
`

export default App
