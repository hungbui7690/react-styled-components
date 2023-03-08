import styled from 'styled-components'

const BasicTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;

  /* (2) in styled component > it's a little bit different > since this is css, first we need to have the property */
  color: ${(props) => props.special && 'darkorange'};
`

export default BasicTitle
