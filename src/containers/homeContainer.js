import React from 'react'
import { connect } from "react-redux";

import * as actions from "actions/application";
import * as userAction from "actions/userAction";
import * as dialogsActions from "actions/dialogActions";
import * as messagesActions from "actions/messageActions";

import { API } from "api";

import HomePages from "../pages/HomePage";

import openSocket from "socket.io-client";
const socket = openSocket("https://immense-everglades-27398.herokuapp.com");

// async function updateMessages(message) {
//   console.log(message);
//   this.props.updateMessages(message);
// }

// async function getTextAreaValue(e) {
//   const { value } = e.target;

//   if (value.trim().length) {
//     this.setState({
//       messageText: value
//     });
//   }
// }

// async function sendMessage() {
//   const messagesList = this.myRef.current;

//   if (this.state.messageText) {
//     socket.emit("MESSAGE", this.state.messageText);
//   }

//   const data = {
//     dialog: this.state.currentDialogId,
//     text: this.state.messageText
//   };

//   await API.MESSAGES.sendMessage(data);

//   messagesList.scrollTo({
//     top: 999999999,
//     left: 0,
//     behavior: "smooth"
//   });
// }


class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentDialogId : '',
      currentDialogUser : ''
    }
  }

  fetchMessagesById = async id => {
    const { 
      homeContainerState : { 
        dialogList,
      } 
    } = this.props;
  
    const currrentUser = dialogList.find(i => i._id === id);
  
    this.setState({
      currentDialogId: id,
      currentDialogUser: currrentUser.partner
    });
  
    socket.emit("DIALOGS:JOIN", id);
  
    let response;
    if (id) {
      response = await API.MESSAGES.getMessages(id);
      this.props.fetchMessages(response);
    }
  
    // setTimeout(() => {
    //   const messagesList = this.myRef.current;
  
    //   messagesList.scrollTo({
    //     top: 999999999,
    //     left: 0,
    //     behavior: "smooth"
    //   });
    // }, 100);
  }

  getDialogs = async () => {
    const response = await API.DIALOG.getDialogs();
    this.props.fetchDialogs(response);
  }

  getUserInfo = async () => {
    const response = await API.USER.getMe();
    this.props.fetchUserInfo(response);
  }

  componentDidMount() {
    this.props.mount();

    this.getDialogs();
    this.getUserInfo();
    this.getUserInfo();
  }

  render() {
    const { 
      homeContainerState : { 
        dialogList,
        userInfo,
        messageList
      } 
    } = this.props;

    const {currentDialogUser} = this.state

    return <HomePages 
      fetchMessagesById={this.fetchMessagesById}
      currentDialogUser={currentDialogUser}
      userInfo={userInfo} 
      dialogList={dialogList} 
      messageList={messageList} 
    />
  }
}

const mapStateToProps = state => ({
  homeContainerState: state.Application,
});

const mapDispatchToProps = {
  ...actions,
  ...dialogsActions,
  ...userAction,
  ...messagesActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
