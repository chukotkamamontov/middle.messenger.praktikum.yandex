// import renderLayout from './layout/default';
// import renderHomePage from './pages/home';
// import renderSigninPage from './pages/signin';
// import renderSignupPage from './pages/signup';
// import renderSettingsPage from './pages/settings';
// import renderNotFoundPage from './pages/notFoundPage';
// import renderServerErrorPage from './pages/500';

// const root: any = document.querySelector('#app');

// const { pathname } = window.location;

// switch (pathname) {
//   case '/':
//   case '/profile':
//     root.innerHTML = renderLayout(renderHomePage({}, pathname));
//     break;
//   case '/signin':
//     root.innerHTML = renderLayout(renderSigninPage());
//     break;
//   case '/signup':
//     root.innerHTML = renderLayout(renderSignupPage());
//     break;
//   case '/settings':
//     root.innerHTML = renderLayout(renderSettingsPage());
//     break;
//   case '/500':
//     root.innerHTML = renderLayout(renderServerErrorPage({ code: 500 }));
//     break;
//   default:
//     root.innerHTML = renderLayout(renderNotFoundPage({ code: 404 }));
//     break;
// }

import { render } from './tools/render';
import { HomePage } from './pages/home';
import { NotFoundPage } from './pages/notFoundPage';
import { Settings } from './pages/settings';
import { Profile } from './pages/profile';
import { SignIn } from "./pages/signin";
import { SignUp } from './pages/signup';

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
