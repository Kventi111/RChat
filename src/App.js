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
    this.textArea = React.createRef()
  }

  componentDidMount() {
    this.props.mount()

    this.getUserInfo()
    this.getDialogs()

    const findText = ReactDOM.findDOMNode(this.textArea.current)
    if (findText) {
      findText.addEventListener('keypress',this.getTextAreaValue)
    }
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
    const findText = ReactDOM.findDOMNode(this.textArea.current)
    findText.removeEventListener('keypress',this.getTextAreaValue)
  }


  fetchMessagesById = async id => {
    let response;
    if (id) {
      response = await API.MESSAGES.getMessages(id)
      this.props.fetchMessages(response)
    }
  }

  getTextAreaValue = e => {
    let value;
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault()
      value = e.target.value
    }

    console.log(value)
    return value
  }

  test = () => {
    console.log('11')
  }

  render() {
    const {loading, userInfo, dialogList, messageList} = this.props.Application;    

    console.log(userInfo)
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
                  badgeCount={3}
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
                  <TextArea 
                    ref={this.textArea}
                    placeholder="Напишите сообщение.." 
                    autosize={{ minRows: 1, maxRows: 5 }} 
                  />
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