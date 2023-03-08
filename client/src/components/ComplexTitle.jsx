import React from 'react'
import styled from 'styled-components'

// (1)
const ComplexTitle = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className='underline'></div>
    </div>
  )
}

// (***) since the wrap around h1 is a div > here we use a div
const Wrapper = styled.div``

export default ComplexTitle
