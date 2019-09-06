import styled from 'styled-components';

const Message = styled.div`
  max-width: 50%;
  border: 1px solid rgba(0,0,0,.15);
  align-self: ${props => props.me ? 'flex-end' : 'flex-start'};
  padding: 3px 8px;
  border-radius: 10px;
  margin: 3px 0;
`;

export default Message;