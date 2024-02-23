import renderLayout from "./layout/default";
import renderHomePage from "./pages/home";
import renderSigninPage from "./pages/signin";
import renderSignupPage from "./pages/signup";
import renderSettingsPage from './pages/settings'
import renderNotFoundPage from "./pages/notFoundPage";
import renderServerErrorPage from './pages/500'

const root = document.querySelector("#app");

const { pathname } = window.location;
switch (pathname) {
  case "/":
  case "/profile":
    root.innerHTML = renderLayout(renderHomePage({}, pathname));
    break;
  case "/signin":
    root.innerHTML = renderLayout(renderSigninPage());
    break;
  case "/signup":
    root.innerHTML = renderLayout(renderSignupPage());
    break;
  case "/settings":
    root.innerHTML = renderLayout(renderSettingsPage());
    break;
  case "/500":
    root.innerHTML = renderLayout(renderServerErrorPage({ code: 500 }));
    break;
  default:
    root.innerHTML = renderLayout(renderNotFoundPage({ code: 404 }));
    break;
}
