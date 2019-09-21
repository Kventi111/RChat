import React,{useReducer, useState} from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom'

import { Input,Button } from 'antd';
import { Card, Section, Message, DialogHeader } from './components'

import * as actions from './actions/application'
import * as userActions from './actions/userAction'
import * as dialogsActions from './actions/dialogActions'
import * as messagesActions from './actions/messageActions'

import { API } from './api'
import sadFrank from './icons/sadFrank.svg'

import openSocket from 'socket.io-client';


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

const socket = openSocket('https://immense-everglades-27398.herokuapp.com');

const { TextArea, Search } = Input;
const url = 'https://images.unsplash.com/photo-1563494270-4e133aea0ede?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80'


function EmptyState({text,subtitle}) {
  const style ={
    display : "flex",
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'column',
    height : "100%",
    width: "100%",
    backgroundColor : '#b1afaf1a'
  }

  return (
    <div style={style}>
      <p className="emptyStateTitle"> {text} </p>
      {subtitle && <small>{subtitle}</small>}
      <img src={sadFrank} className="sanFrank" alt={'icon'} />
    </div>
  )
} 

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messageText : '',
      currentDialogId :  ''
    }
  }

  componentDidMount() {
    this.props.mount()

    socket.on("DIALOGS:SUCCESS", socket => console.log(socket));
    socket.on("NEW:MESSAGE", this.updateMessages);

    this.getUserInfo()
    this.getDialogs()
  }

  updateMessages = message => {
    console.log(message)
    this.props.updateMessages(message)
  }

  getUserInfo = async () => {
    const response = await API.USER.getMe();
    this.props.fetchUserInfo(response);
  }

  getDialogs = async () => {
    const response = await API.DIALOG.getDialogs();
    this.props.fetchDialogs(response);
  }

  componentWillUnmount() {

    socket.removeListener("DIALOGS:SUCCESS", () => console.log('test'));
    socket.removeListener("NEW:MESSAGE", socket => console.log(socket));
  }


  fetchMessagesById = async id => {
    this.setState({
      currentDialogId : id
    })

    socket.emit("DIALOGS:JOIN", id);

    let response;
    if (id) {
      response = await API.MESSAGES.getMessages(id)
      this.props.fetchMessages(response)
    }
  }

  getTextAreaValue = e => {
    const {value} = e.target

    if(value.trim().length) {
      this.setState({
        messageText : value,
       })
    }
  }

  sendMessage = async () => {
    if (this.state.messageText) {
      socket.emit("MESSAGE",this.state.messageText)
    }

    const data = {
      dialog : this.state.currentDialogId,
      text : this.state.messageText
    }


    await API.MESSAGES.sendMessage(data)
  }


  render() {
    const {loading, userInfo, dialogList, messageList} = this.props.Application;    

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
              {false && <DialogHeader />}
            </Section>
          </Header>
          <DialogWrapper>
            <DialogList>
              {dialogList.length ? dialogList.map(item => (
                <Card 
                  key={item._id}
                  imgSrc={url}
                  userName={item.partner.fullname}
                  lastUpdate={'14:00'}
                  lastMessage={item.lastMessage.text}
                  onClick={() => this.fetchMessagesById(item._id)}
                />
              )) : <EmptyState text={"Создайте диалог"} subtitle={'не злите фрэнка :)'} />}
            </DialogList>
            <DialogWindow>
              {messageList.length 
               ?  
               <React.Fragment>
                  <DialogMessages>
                      {/* {Array.from({ length: 50 }, (v, k) => k).map(item => (
                        <Message key={item} me={item % 2 === 0}>
                          {item}
                        </Message>
                      ))} */}
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
            </DialogWindow>
          </DialogWrapper>
        </Content>
      </Wrapper>
    );
  }
}


const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = {
  ...actions,
  ...userActions,
  ...dialogsActions,
  ...messagesActions
}

export default connect(mapStateToProps,mapDispatchToProps)(App);