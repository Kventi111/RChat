import React, { Component } from 'react'

import { LoginForm, RegisterForm } from '../../components';

export default class AuthPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogin : true
    }
  }

  toggleLoginState = () => {
    this.setState({ isLogin : !this.stata.isLogin })
  }

  render() {

    const {isLogin} = this.state
    return (
      <div>
        {isLogin && <LoginForm />}
        {!isLogin && <RegisterForm />}
        <hr/>
  
        {isLogin && 
          <div onClick={this.toggleLoginState}>
            <small>У тебя нет ??</small>
            <small>Тогда немедленно зарегистрируйся !!!</small>
          </div> 
        }
  
        {!isLogin && 
          <div onClick={this.toggleLoginState}>
            <small>У тебя уже есть логин ??</small>
            <small>Тогда хули ты тут делаешь пиздуй отсюда !!!</small>
            <small>И зайди в меня, то есть в приложение грязный извращенец(ка)</small>
          </div> 
        }
  
       
      </div> 
    )
  }
}

