import styled from 'styled-components'

export const DefaultButton = styled.button`
  background-color: crimson;
  color: white;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
`

export const HipsterButton = styled(DefaultButton)`
  width: 10rem;
  background: transparent;
  text-transform: uppercase;
  color: crimson;
  border: crimson 1px solid;
  margin-top: 1rem;
`
