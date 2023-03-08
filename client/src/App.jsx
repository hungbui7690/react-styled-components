/*
  Inline Styles & Global CSS
  > npm install styled-components


  + with inline style, when we need to reuse > copy 
    > later, if we want to change > need to go to many places to change
  + with className > cannot use simple className because of className collision 
    > when project gets bigger, it's hard for maintain

  >> Solution: styled-components > Next Lesson

 */

function App() {
  // (***) inline style + className (check css file)
  return (
    <div style={{ padding: '2rem', backgroundColor: 'grey' }}>
      <h1 className='title'>Styled Components</h1>
      <button className='btn'>Click Me</button>
    </div>
  )
}

export default App
