import React from 'react'
import styled from 'styled-components'

const Random = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className='underline'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    text-transform: uppercase;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background-color: lightgreen;
    margin: 0 auto;
  }
`

// (***)
export default Random
