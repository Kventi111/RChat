import React from "react";
import { Input } from "antd";

import { EmptyState, Message } from "components";

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

const { TextArea } = Input;

class HomePage extends React.Component {
  render() {
    const { list, userId } = this.props;
    return (
      <DialogWindow>
        {list.length ? (
          <React.Fragment>
            <DialogMessages ref={this.myRef}>
              {list.map(item => (
                <Message key={item._id} me={userId === item.user}>
                  {item.text}
                </Message>
              ))}
            </DialogMessages>
            <DialogWindowControl>
              <TextArea />
            </DialogWindowControl>
          </React.Fragment>
        ) : (
          <EmptyState
            text={"Выбери диалог"}
            subtitle={"фрэнк думает, что ты интроверт :)"}
          />
        )}
      </DialogWindow>
    );
  }
}

export default HomePage;
