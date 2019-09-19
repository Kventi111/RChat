const initState = {
  mount : false,
  loading  : true,
  userInfo : {}
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
    default:
      return state
  }
}


export default appReducer;