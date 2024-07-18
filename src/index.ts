import './assets/styles/styles.scss';
import router from './tools/router';
import { Login } from './pages/login/modules/login'
import { Register } from './pages/login/modules/register';

export enum Routes {
  Chats = '/messenger',
  EditPassword = '/edit-password',
  EditProfile = '/settings',
  Error = '/500',
  Home = '/',
  Login = '/login',
  NotFound = '/404',
  Profile = '/profile',
  Register = '/sign-up',
}

window.addEventListener('DOMContentLoaded', async () => {
  router
    .use(Routes.Home, Login)
    .use(Routes.Login, Login)
    .use(Routes.Register, Register)


  switch (window.location.pathname) {
    case Routes.Home:
    case Routes.Register:
      break;
  }

  router.go(Routes.Home);
});
