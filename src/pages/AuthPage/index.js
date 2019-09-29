import React, { Component } from 'react'

import { LoginForm, RegisterForm } from 'components';

import {
  Form,
  Footer,
  Text,
  Link
} from './style'

export default class AuthPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogin : true
    }
  }

  toggleLoginState = () => {
    this.setState({ isLogin : !this.state.isLogin })
  }

  render() {
    const {isLogin} = this.state

    return (
      <Form>
        {isLogin && <LoginForm />}
        {!isLogin && <RegisterForm />}
      
        <Footer>
          {isLogin ? 
              <React.Fragment>
                <Text>или</Text> 
                <Link onClick={this.toggleLoginState}>Зарегистрируйся сейчас</Link>
              </React.Fragment>
            : 
            <React.Fragment>s
              <Text>или</Text> 
              <Link onClick={this.toggleLoginState}>Войти в приложение</Link>
            </React.Fragment>
          }
        </Footer>
      </Form> 
    )
  }
}

