/*
  Button Component

 */

import styled from 'styled-components'

const BasicTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`

// (1) name === Default > later use
const DefaultButton = styled.button`
  background-color: crimson;
  color: white;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
`

function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'grey' }}>
      <BasicTitle>Styled Components</BasicTitle>

      {/* (2) at the end, it is still a button */}
      <DefaultButton>Click Me</DefaultButton>
    </div>
  )
}

export default App
