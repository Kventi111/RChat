import React from "react";
import { Input, Button } from "antd";

import {
  Card,
  Section,
  Message,
  DialogHeader,
  DialogList,
  MesasageList
} from "components";

import openSocket from "socket.io-client";

import {
  Wrapper,
  Content,
  Header,
  DialogWrapper,
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
    const {
      dialogList,
      userInfo,
      fetchMessagesById,
      messageList,
      currentDialogUser
    } = this.props;
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
              {currentDialogUser && (
                <DialogHeader userInfo={currentDialogUser} />
              )}
            </Section>
          </Header>
          <DialogWrapper>
            <DialogList
              fetchMessagesById={fetchMessagesById}
              list={dialogList}
            />
            <MesasageList list={messageList} userId={userInfo._id} />
          </DialogWrapper>
        </Content>
      </Wrapper>
    );
  }
}

export default HomePage;
