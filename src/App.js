import React from 'react';
import { Input,Button } from 'antd';
import { Card, Section, Message, DialogHeader } from './components'

import {
  Wrapper,
  Content,
  Header,
  DialogWrapper,
  DialogList,
  DialogWindow,
  DialogMessages,
  DialogWindowControl,
  MessageItem,
  SearchWrapper,
} from './style'

import './App.css'

const { TextArea, Search } = Input;
const url = 'https://images.unsplash.com/photo-1563494270-4e133aea0ede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80'

function App() {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Section width={60}>
            <SearchWrapper>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
              />
            </SearchWrapper>
          </Section>
          <Section>
            <DialogHeader />
          </Section>
        </Header>
        <DialogWrapper>
          <DialogList>
            {[1,2,3,4,5,6,7,8,9,10].map(item => (
              <Card 
                key={item}
                imgSrc={url}
                userName={'1'}
                lastUpdate={'14:00'}
                lastMessage={'hello'}
                badgeCount={item}
              />
            ))}
          </DialogList>
          <DialogWindow>
            <DialogMessages>
              {Array.from({ length: 50 }, (v, k) => k).map(item => (
                <Message key={item} me={item % 2 === 0}>
                  {item}
                </Message>
              ))}
            </DialogMessages>
            <DialogWindowControl>
              <TextArea 
                placeholder="Напишите сообщение.." 
                autosize={{ minRows: 1, maxRows: 5 }} 
              />
            </DialogWindowControl>
          </DialogWindow>
        </DialogWrapper>
      </Content>
    </Wrapper>
  );
}

export default App;
