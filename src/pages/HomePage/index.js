import React from "react";
import { Input } from "antd";

import {
  Section,
  DialogHeader,
  DialogList,
  MesasageList
} from "components";

import {
  Wrapper,
  Content,
  Header,
  DialogWrapper,
  SearchWrapper
} from "./style";

import "./App.css";

const { Search } = Input;

class HomePage extends React.Component {
  render() {
    const {
      dialogList,
      userInfo,
      fetchMessagesById,
      messageList,
      currentDialogUser,
      sendMessage,
      updateMessages
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
            <MesasageList updateMessages={updateMessages} sendMessage={sendMessage} list={messageList} userId={userInfo._id} />
          </DialogWrapper>
        </Content>
      </Wrapper>
    );
  }
}

export default HomePage;
