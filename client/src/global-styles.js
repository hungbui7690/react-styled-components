import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  h4{
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: bold;
    font-size: xx-large;
  }
  .btn{
    padding: 0.5rem 1rem;
    margin-top: 5px;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 5px;
    cursor: pointer;
  }

`

export default GlobalStyles
