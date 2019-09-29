import React from "react";
import { Input, Button } from "antd";

import { Card, Section, Message, DialogHeader, EmptyState } from "components";

import openSocket from "socket.io-client";

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
  SearchWrapper
} from "./style";

import "./App.css";

const { TextArea, Search } = Input;

const url =
  "https://images.unsplash.com/photo-1563494270-4e133aea0ede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80";

class HomePage extends React.Component {
  render() {
    const { dialogList } = this.props;
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
              {/* {currentDialogUser && <DialogHeader userInfo={currentDialogUser} />} */}
            </Section>
          </Header>
          <DialogWrapper>
            <DialogList>
              {dialogList.length ? (
                dialogList.map(item => (
                  <Card
                    key={item._id}
                    imgSrc={url}
                    userName={item.partner.fullname}
                    lastUpdate={"14:00"}
                    lastMessage={item.lastMessage.text}
                    onClick={() => this.fetchMessagesById(item._id)}
                  />
                ))
              ) : (
                <EmptyState
                  text={"Создайте диалог"}
                  subtitle={"не злите фрэнка :)"}
                />
              )}
            </DialogList>
            {/* <DialogWindow>
              {messageList.length 
               ?  
               <React.Fragment>
                  <DialogMessages ref={this.myRef}>
                      {messageList.map(item => (
                        <Message key={item._id} me={userInfo._id === item.user}>
                          {item.text}
                        </Message>
                      ))}
                    </DialogMessages>
                  <DialogWindowControl>
                    <input 
                      ref={this.textArea}
                      placeholder="Напишите сообщение.." 
                      onChange={e => this.getTextAreaValue(e)}
                    />
                    <input type="submit" onClick={this.sendMessage} />
                  </DialogWindowControl>
                </React.Fragment>
               : <EmptyState text={"Выбери диалог"} subtitle={'фрэнк думает, что ты интроверт :)'} />}
            </DialogWindow> */}
          </DialogWrapper>
        </Content>
      </Wrapper>
    );
  }
}

export default HomePage;
