import {baseRequest} from './utils'

// получает диалоги залогиненного пользователя
export function getDialogs() {
  return baseRequest('/dialogs',"GET")
} 