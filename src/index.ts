import './assets/styles/styles.scss';
import router from './tools/router';
import { Login } from './pages/home/modules/login'
import { Register } from './pages/home/modules/register';
import { Profile } from './pages/profile';
import { AuthController } from './controllers/AuthController';
import { Routes } from './types';
import { Settings } from './pages/settings';
import { Messenger } from './pages/messenger';

window.addEventListener('DOMContentLoaded', async () => {
  router
    .use(Routes.Home, Login)
    .use(Routes.Login, Login)
    .use(Routes.Register, Register)
    .use(Routes.Profile, Profile)
    .use(Routes.Settings, Settings)
    .use(Routes.Messenger, Messenger)

  let isProtectedPage = true;

  switch (window.location.pathname) {
    case Routes.Home:
    case Routes.Register:
      isProtectedPage = false;
      break;
  }

  try {
    await AuthController.fetchUser();
    router.start();
    if (!isProtectedPage) {
      router.go(Routes.Profile);
    }
  } catch (error) {
    router.start();
    if (isProtectedPage) {
      router.go(Routes.Home);
    }
  }
});
