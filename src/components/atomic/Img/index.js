import styled from 'styled-components';

const Img = styled.div`
  width: ${props => props.size ? `${props.size}px` : '40px'};
  height: ${props => props.size ? `${props.size}px` : '40px'};
  border-radius: ${props => props.circle ? '50%' : '0%'};
  background: ${props => props.imgUrl ? `url(${props.imgUrl})` : 'gray'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export default Img;