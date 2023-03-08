/*
  Separate Files 
  - since these are react components > we can divide in multiple files easily

  (1) create folder components/BasicTitle.js
    > Buttons.js > later, we want to have many Buttons in this file

 */

// (***)
import BasicTitle from './components/BasicTitle'
import { DefaultButton } from './components/Buttons'

function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'grey' }}>
      <BasicTitle>Styled Components</BasicTitle>
      <DefaultButton>Click Me</DefaultButton>
    </div>
  )
}

export default App
