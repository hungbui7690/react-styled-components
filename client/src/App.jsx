/*
  First Styled Component

 */

// (1)
import styled from 'styled-components'

// (2) cut from the index.css
const BasicTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`

function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'grey' }}>
      {/* (3) reuse easily */}
      <BasicTitle>Styled Components</BasicTitle>
      <BasicTitle>Styled Components</BasicTitle>

      <button className='btn'>Click Me</button>
    </div>
  )
}

export default App
