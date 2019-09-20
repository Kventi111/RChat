import {baseRequest} from './utils'

// получает сообщения
export function getMessages(id) {
  return baseRequest(`/message/${id}`,"GET")
}

export function sendMessage(data) {
  return baseRequest(`/message/create`,"POST",data)  
}