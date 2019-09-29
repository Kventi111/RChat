import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 800px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(0,0,0,.08);
`;

export const Header = styled.div`
  height: 60px;
  border: 1px solid rgba(0,0,0,.08);
  display: flex;
`

export const DialogWrapper = styled.div`
  height: 100%;
  display: flex;
`;

export const DialogList = styled.div`
  height: inherit;
  overflow: auto;
  width: 300px;
  border: 1px solid rgba(0,0,0,.08);
`;

export const DialogWindow = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const DialogMessages = styled.div`
  height: 100%;
  overflow: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const MessageItem = styled.div`
  max-width: 50%;
  border: 1px solid rgba(0,0,0,.15);
  align-self: ${props => props.me ? 'flex-end' : 'flex-start'};
  padding: 3px 8px;
  border-radius: 10px;
  margin: 3px 0;
`;


export const Section = styled.div`
  width: ${props => props.width ? props.width : 100 }%;
  height: 100%;
  border-left: 1px solid  rgba(0,0,0,.15);
  border-right: 1px solid  rgba(0,0,0,.15);
`;

export const NameAndTime = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const MessageAndBadge = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SearchWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
`;

export const DialogWindowControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  border-top: 1px solid rgba(0,0,0,.08);  
`;