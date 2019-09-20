export const fetchMessages  = data => ({
  type : 'FETCH_MESSAGES_SUCCESS',
  payload : data
})


export const updateMessages = message => ({
  type : "UPDATE_MESSAGES",
  payload : message
})