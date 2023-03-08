import React from 'react'
import styled from 'styled-components'

const ComplexTitle = (props) => {
  console.log(props) // {title: 'Hello World', className: 'sc-beySbM gZrJao'} > className is passed to props

  return (
    // (***) Change back to div + pass className from props
    <div className={props.className}>
      <h1>{props.title}</h1>
      <div className='underline'></div>
    </div>
  )
}

// (***) extends ComplexTitle
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

// (***) with this setup, we need to export Wrapper
export default Wrapper
