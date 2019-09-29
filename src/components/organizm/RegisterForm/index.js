import React from "react";

import { Form, Icon, Input, Button } from "antd";

import { API } from "api";

import "./style.css";

class RegisterForm extends React.Component {
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

    const res = await API.USER.signUp(
    {
      fullname,
      email, 
      password  
    }
    );

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

  onChangeHandler = e => {
    const { value, id } = e.target;
    console.log(value)
    this.setState({ [id]: value });
  };

  render() {
    const { firstName, lastName, email, password, serverMessage } = this.state;
    return (
      <Form className="loginForm">
        <p className="form__title">Register</p>
        <Form.Item>
          <Input
            id="firstName"
            size={"large"}
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Имя"
            value={firstName}
            onChange={this.onChangeHandler}
          />
        </Form.Item>
        <Form.Item>
          <Input
            id="lastName"
            size={"large"}
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Фамилия"
            value={lastName}            
            onChange={this.onChangeHandler}
          />
        </Form.Item>
        <Form.Item>
          <Input
            id="email"
            size={"large"}
            prefix={<Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Почта"
            value={email}
            onChange={this.onChangeHandler}
          />
        </Form.Item>
        <Form.Item>
          <Input
            id="password"
            size={"large"}
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Пароль"
            value={password}
            onChange={this.onChangeHandler}
          />
        </Form.Item>
        <Form.Item>
          <span
            style={{
              color: serverMessage.status === "success" ? "green" : "red"
            }}
          >
            {serverMessage.text}
          </span>
        </Form.Item>
        <Button
          size="large"
          onClick={this.userRegister}
          type="primary"
          className="login-form-button"
        >
          Регистрация
        </Button>
      </Form>
    );
  }
}

export default RegisterForm;
