import renderHomePage from "./pages/home";
import renderErrorPage from "./pages/error";
import renderSigninPage from "./pages/signin";
import renderSignupPage from "./pages/signup";
import renderLayout from "./layout/default";

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
  default:
    root.innerHTML = renderLayout(renderErrorPage({ code: 404 }));
    break;
}
