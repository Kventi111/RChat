
import Auth from '../pages/AuthPage'

export const openRoute = [
  {
    exact: true,
    path: '/',
    title: 'Вход в систему',
    component: Auth,
    service: null,
  },
];

export default openRoute;
