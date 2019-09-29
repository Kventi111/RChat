import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

import { API } from 'api'

import './style.css'

class LoginForm extends React.Component {
    constructor(props) {
      super(props)

      this.state ={
        login : '',
        password : '',
        serverMessage : {
          text : '',
          status : ''
        }
      }
    }

    userLogin = async () => {
      const { login,password } = this.state;

     const res = await API.USER.signIn({ email : login,password })
     
      if (res.message) {
        this.setState({ serverMessage : {
          text : res.message,
          status : 'error'
        }})
      } else {
        window.localStorage.setItem('authToken',res.token)

        this.setState({ serverMessage : {
          text : 'Успешно',
          status : 'success'
        }})

        setTimeout(() => {
          window.location.replace('/home')
        },300)
      }
    }

    onChangeHandler = e => {
      const { value, id } = e.target
      this.setState({ [id] : value })
    }

    render() {
      const {login,password,serverMessage} = this.state;
      return (
        <Form className="loginForm">
          <p className="form__title">
            Login
          </p>
          <Form.Item>
            <Input
              id='login'
              size={'large'}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Логин"
              value={login}
              onChange={this.onChangeHandler}  
            />
          </Form.Item>
          <Form.Item>
            <Input
              id='password'
              size={'large'}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={this.onChangeHandler}  
            />
          </Form.Item>
          <Form.Item>
            <span style={{ color : serverMessage.status === "success" ? 'green' : 'red' }}>{serverMessage.text}</span> 
          </Form.Item>
          <Button 
            size="large" 
            onClick={this.userLogin} 
            type="primary" 
            className="login-form-button"
          >
            Вход
          </Button>
        </Form>
      )
    }
}

export default LoginForm;