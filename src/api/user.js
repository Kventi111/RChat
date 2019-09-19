import {baseRequest} from './utils'

// получает информацию о пользователе
export function getMe() {
  return baseRequest('/user',"GET")
} 