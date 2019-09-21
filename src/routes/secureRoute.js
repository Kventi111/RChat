import App from '../App'

// TODO - Сделать компонент не найденной страницы
export const secureRoutes = [
  {
    exact: true,
    path: '/home',
    title: 'Главная',
    component: App,
    service: null,
  },
  {
    path: '*',
    component: () => 'page not found'
  }
];

export default secureRoutes;
