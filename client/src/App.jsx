/*
  Animation

  (1) create Loading.jsx
*/

import styled from 'styled-components'
import Loading from './components/Loading'

function App() {
  return (
    <div className='container'>
      <h2>Animation</h2>
      <Loading />
    </div>
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
  background-color: #eff1f5;
  min-height: 100vh;
`

export default App
