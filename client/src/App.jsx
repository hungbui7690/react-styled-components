/*
  Extended React Component
  - we want to extend a component of Material UI


  > in MUI V5, we cannot modify this easily > need to config a little bit with Webpack
    > below won't work 

  (***) we can downgrade to MUI 4 > but MUI 4 does not work with react 18

*/

// (1a)
import Button from '@mui/material/Button'
import styled from 'styled-components'

// (2a)
const StyledButton = styled(Button)`
  text-transform: capitalize;
  margin-top: 1rem;
`

function App() {
  return (
    <Wrapper>
      {/* (1b) default is upper case > but we don't want that */}
      <Button variant='contained'>Hello World</Button>

      {/* (2b) */}
      <StyledButton color='primary' variant='outlined'>
        Hello World
      </StyledButton>
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
`

export default App
