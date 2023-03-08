import React from 'react'
import styled from 'styled-components'

const ComplexTitle = ({ title }) => {
  return (
    // (***) use Wrapper instead of div
    <Wrapper>
      <h1>{title}</h1>
      <div className='underline'></div>
    </Wrapper>
  )
}

// (***) with this setup, we can use very simple class name, and don't worry about class name collision > for example: create Random.jsx and setup same as this one
const Wrapper = styled.div`
  /* target to h1 inside Wrapper */
  h1 {
    text-transform: uppercase;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background-color: crimson;
    margin: 0 auto;
  }
`

export default ComplexTitle
