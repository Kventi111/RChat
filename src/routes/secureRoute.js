import Home from '../containers/homeContainer'

// TODO - Сделать компонент не найденной страницы
export const secureRoutes = [
  {
    exact: true,
    path: '/home',
    title: 'Главная',
    component: Home,
    service: null,
  },
  {
    path: '*',
    component: () => 'page not found'
  }
];

export default secureRoutes;
