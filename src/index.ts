import { render } from './tools/render';
import { HomePage } from './pages/home';
import { NotFoundPage } from './pages/notFoundPage';
import { Settings } from './pages/settings';
import { Profile } from './pages/profile';
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';

import { Fetch } from './tools/fetch';

const fetch = new Fetch();
fetch.get('https://fakestoreapi.com/products/1').then((res) => console.log(res));

const ROUTES: any = {
  '/': new HomePage(),
  '/settings': new Settings(),
  '/profile': new Profile(),
  '/signin': new SignIn(),
  '/signup': new SignUp(),
  '/404': new NotFoundPage({
    statusCode: '404',
    message: 'Страница не найдена',
  }),
  '/500': new NotFoundPage({
    statusCode: '500',
    message: 'Ошибка сервера',
  }),
};

document.addEventListener('DOMContentLoaded', () => {
  render('#app', ROUTES[window.location.pathname]);
});
