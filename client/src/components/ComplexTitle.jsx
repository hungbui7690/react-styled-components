import React from 'react'
import styled from 'styled-components'

const ComplexTitle = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <div className='underline'></div>
    </div>
  )
}

const Wrapper = styled(ComplexTitle)`
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

export default Wrapper
