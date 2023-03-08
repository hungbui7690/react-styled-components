/*
  Setup in Details

  (***) check in Elements tab > className is decoded > no name collision
    > hard to debug 
      > solution: https://styled-components.com/docs/tooling#babel-plugin


  Extension: vscode-styled-components

 */

// (1) styled === naming convention
import styled from 'styled-components'

// (2) create react component > Pascal Case
// template string === tagged template literal === es6 !== react
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
