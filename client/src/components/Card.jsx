import styled from 'styled-components'

import React from 'react'

const Card = () => {
  return (
    <Wrapper>
      <img src='./product.jpg' alt='' />
      <footer>
        <h4>Product Name</h4>
        <p>$15</p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: white;
  border-radius: 0.25rem;

  img {
    width: 50vw;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;

    /* (***) nesting here */
    h4 {
      color: #444;
    }
    p {
      color: var(--primaryColor);
      font-weight: bold;
    }
  }
`

export default Card
