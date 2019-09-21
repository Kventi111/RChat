import {baseRequest} from './utils'

// получает информацию о пользователе
export function getMe() {
  return baseRequest('/user',"GET")
} 

export function signIn(data) {
  return baseRequest('/user/signin',"POST",data)
}


export function signUp(data) {
  return baseRequest('/user/signup',"POST",data)
}