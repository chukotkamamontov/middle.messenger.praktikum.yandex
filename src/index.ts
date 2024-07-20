import './assets/styles/styles.scss';
import router from './tools/router';
import { Login } from './pages/home/modules/login'
import { Register } from './pages/home/modules/register';
import { Home } from './pages/home';
import { AuthController } from './controllers/AuthController';

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
    .use(Routes.Home, Home)
    .use(Routes.Login, Login)
    .use(Routes.Register, Register)

  let isProtectedPage = true;

  switch (window.location.pathname) {
    case Routes.Home:
    case Routes.Register:
      isProtectedPage = false;
      break;
  }

  try {
    await AuthController.fetchUser();
  } catch (error) {
    router.go(Routes.Login);
  }
});
