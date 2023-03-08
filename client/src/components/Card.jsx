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

    /* (***) now & is footer */
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    h4 {
      color: #444;
    }
    p {
      color: var(--primaryColor);
      font-weight: bold;
    }

    /* (***) */
    &::after {
      content: 'Lens';
      color: red;
    }
  }

  /* (***) hover for the container */
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  }

  /* (***) */
  @media (min-width: 576px) {
    img {
      width: 80vw;
    }
  }
`

export default Card
