/*
  Extended Styled Component

  (1) Buttons.js
 */

import BasicTitle from './components/BasicTitle'

// (2)
import { DefaultButton, HipsterButton } from './components/Buttons'

function App() {
  return (
    <div>
      <BasicTitle special>Styled Components</BasicTitle>

      <DefaultButton>Click Me</DefaultButton>

      {/* (3) */}
      <HipsterButton>Click Me</HipsterButton>
    </div>
  )
}

export default App
