/*
  Simple Props
  - since they are react components > we can pass props 

 */

import BasicTitle from './components/BasicTitle'
import { DefaultButton } from './components/Buttons'

function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'grey' }}>
      {/* (1) pass props */}
      <BasicTitle special>Styled Components</BasicTitle>

      <DefaultButton>Click Me</DefaultButton>
    </div>
  )
}

export default App
