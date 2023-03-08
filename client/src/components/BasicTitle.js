import styled from 'styled-components'

const BasicTitle = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ special }) => special && 'darkorange'};
  text-decoration: ${(props) => (props.special ? 'underline' : 'none')};
`

export default BasicTitle
