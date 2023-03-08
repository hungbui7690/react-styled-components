/*
  Utils Approach Use Case
  - with Utils way, the only reason we want to use is when we want to setup function

  (1) utils.js

*/

// (2)
import styled from 'styled-components'
import ComplexTitle from './components/ComplexTitle'

import { colors, setupBorder } from './utils'

function App() {
  return (
    <Wrapper>
      <ComplexTitle title='Hello World' />

      {/* (3) */}
      <div className='box'></div>
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

  .box {
    width: 300px;
    height: 300px;

    /* (4) */
    border: ${setupBorder({ width: '1px', type: 'solid', color: 'green' })};
  }
`

export default App
