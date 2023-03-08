/*
  Utils Approach
  - create object contains multiple variables

  (1) create utils.js
  (2) App.js


  (***) with this, we need to import every time we need to use > use Global CSS Variables

*/

import styled from 'styled-components'
import ComplexTitle from './components/ComplexTitle'

// (2)
import { colors } from './utils'

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

  /* (3) */
  background-color: ${colors.primary};
`

export default App
