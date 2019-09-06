import React from 'react';
import styled from 'styled-components';

import { Paragraph, Section, Title, Img } from '../../../components'

const Wrapper = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogHeader = ({ userName,messageStatut }) => (
  <Section>
    <Wrapper>
      <Section width={15}>
        <Avatar>
          <Img circle size={50} imgUrl={'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'} /> 
        </Avatar>       
      </Section>
      <Section width={85  }>
        <Title>123</Title>
        <Paragraph> typing... </Paragraph>
      </Section>
    </Wrapper>
  </Section>
)

export default DialogHeader;


