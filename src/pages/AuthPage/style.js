import styled from 'styled-components';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f1f1f1;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 300px;
  margin: 10px auto;
`;

export const Text = styled.p`
  display: inline;
  font-size: 14px;
  margin: 0 5px 0 0;
  padding: 0;
  color: rgba(0,0,0,.5);
`;

export const Link = styled.p`
  font-size: 14px;
  color: #1890ff;
  margin: 0;
  padding: 0;
  display: inline;
  cursor:  pointer;
  &:hover {
    color: #1480e4;
  }
`;
