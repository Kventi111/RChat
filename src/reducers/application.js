const initState = {
  mount : false,
  loading  : true,
  userInfo : {},
  dialogList : [],
  messageList : []
}

const appReducer = (state = initState, action) => {
  const { payload,type }  = action;

  switch(type) {
    case "APP_INIT_SUCCESS":
      return {
        ...state,
        mount : true
      }
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        userInfo : payload
      }
    case "FETCH_DIALOG_SUCCESS":
      return {
        ...state,
        dialogList : payload
      }
    case "FETCH_MESSAGES_SUCCESS":
      return {
        ...state,
        messageList : payload
      }
    case "UPDATE_MESSAGES":
      return {
        ...state,
        messageList : [
          ...state.messageList,
          payload
        ]
      }
    default:
      return state
  }
}


export default appReducer;