import React from 'react';
import { API } from "api";

import RegisterForm from './component'


export default class RegisterFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      lastName : '',
      firstName : '',
      serverMessage: {
        text: "",
        status: ""
      }
    };
  }

  userRegister = async () => {
    const { password,firstName,lastName,email } = this.state;

    const fullname = firstName + lastName;

    const res = await API.USER.signUp({
      fullname,
      email, 
      password  
    });

    if (res.message) {
      this.setState({
        serverMessage: {
          text: res.message,
          status: "error"
        }
      });
    } else {
      window.localStorage.setItem("authToken", res.token);

      this.setState({
        serverMessage: {
          text: "Успешно",
          status: "success"
        }
      });

      setTimeout(() => {
        window.location.replace("/home");
      }, 300);
    }
  };

  handleChange = e => {
    const { value, id } = e.target;
    console.log(value)
    this.setState({ [id]: value });
  };

 render() {
  const {
    firstName,
    lastName,
    email,
    password,
    serverMessage,
  } = this.state;
  return (
    <RegisterForm 
      onChange={this.handleChange} 
      onRegister={this.userRegister}
      firstName={firstName}
      lastName={lastName}
      email={email}
      password={password}
      serverMessage={serverMessage}
    />
  )
 } 
}