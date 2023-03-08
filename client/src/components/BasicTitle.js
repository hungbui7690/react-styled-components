import styled from 'styled-components'

const BasicTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;

  /* (***) props > we can destructure  */
  color: ${({ special }) => special && 'darkorange'};

  /* (***) ternary operator */
  text-decoration: ${(props) => (props.special ? 'underline' : 'none')};
`

export default BasicTitle
