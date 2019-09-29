import { ACTIONS } from 'constants';

export const SocketConnect = id => ({
  type : ACTIONS.SOCKET_CONNECT,
  payload : id
})