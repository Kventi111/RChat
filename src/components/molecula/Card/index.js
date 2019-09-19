import React from 'react'
import styled from 'styled-components'

import { Title, Section, Paragraph, Badge, Img } from '../..'


const Wrapper = styled.div`
  display: flex;
  padding: 12px;
  transition: all .2s;
  cursor: pointer;
  &:hover {
    background: #f5f7fa;
  }
  &:last-child {
    margin: 0;
  }
`;

const NameAndTime = styled.div`
  display: flex;
  justify-content: space-between;
`;


const MessageAndBadge = styled.div`
  display: flex;
  justify-content: space-between;
`

const Avatar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px 0 0;
`

const Content = styled.div`
  width: 100%;
`;

const Card = ({
  imgSrc,
  userName,
  lastUpdate,
  lastMessage,
  badgeCount,
  onClick
}) => (
  <Wrapper onClick={onClick}>
    <Avatar>
      <Img 
        imgUrl={imgSrc}
        size={50} 
        circle
      />
    </Avatar>
    <Content>
      <Section>
        <NameAndTime>
          <Title>{userName}</Title>
          <Paragraph>{lastUpdate}</Paragraph>
        </NameAndTime>
      </Section>
      <Section>
        <MessageAndBadge>
          <Paragraph>{lastMessage}</Paragraph>
          <Badge>{badgeCount}</Badge>
        </MessageAndBadge>
      </Section>
    </Content>
  </Wrapper>
)


export default Card;