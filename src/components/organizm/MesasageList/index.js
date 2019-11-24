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

import './style.css'

const { TextArea } = Input;

class HomePage extends React.Component {
  onPressHandler = e => {

    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault()
      
      this.props.sendMessage(e.target.value)
      this.props.updateMessages(e.target.value)
    }

  }
  render() {
    const { list, userId, sendMessage } = this.props;
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
              <TextArea onPressEnter={this.onPressHandler} autosize placeholder="Введите сообщение" className="dialogControl" />
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
