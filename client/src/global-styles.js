// (1)
import { createGlobalStyle } from 'styled-components'

// (2)
const GlobalStyles = createGlobalStyle`
  h4{
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: bold;
    font-size: xx-large;
  }


`

// (3) go to App.js
export default GlobalStyles
