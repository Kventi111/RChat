import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = styled.p`
  color: #000;
  font-size: 16px;
  margin: 3px 0;
  font-weight: bold;
`

Title.propTypes = {
  reverse: PropTypes.bool,
}

export default Title;
