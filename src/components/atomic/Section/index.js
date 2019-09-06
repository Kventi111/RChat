import styled from 'styled-components'

const Section = styled.div`
  width: ${props => props.width ? props.width : 100 }%;
  & > div {
    height: 100%;
  }
`
export default Section;
