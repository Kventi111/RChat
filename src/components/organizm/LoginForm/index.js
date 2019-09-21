import React from 'react';

import { API } from '../../../api'


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
        <div>
          <span style={{ color : serverMessage.status === "success" ? 'green' : 'red' }}>{serverMessage.text}</span> 
          <br />
          <br />
          <label htmlFor="login">login</label><br/>
          <input 
            id="login" 
            type="text"
            value={login}
            onChange={this.onChangeHandler} 
          /> <br />
          <label htmlFor="password">password</label><br/>
          <input 
            id="password" 
            type="text" 
            value={password}            
            onChange={this.onChangeHandler}  
          /> <br />
          <button onClick={this.userLogin} >Войти</button>
        </div>
      )
    }
}

export default LoginForm;