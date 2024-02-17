import styles from "./settings.module.scss";
import tml from "./settings.hbs";
import form from "../../components/form";
import input from "../../components/input";
import button from "../../components/button";

export default function (ctx = {}, route) {
  const baseCtx = {
    data: "SIGN UP PAGE",
    title: "Sign Up",
    form: form({
      inputs: [
       input({
        name: "first_name",
        id: "first_name",
        helper: "This field is required",
        label: "First name",
        outlined: true,
       }),
       input({
        name: "second_name",
        id: "second_name",
        helper: "This field is required",
        label: "Second name",
        outlined: true,
       }),
       input({
        name: "login",
        id: "login",
        helper: "This username is already exists",
        label: "Login",
        outlined: true,
       }),

       input({
        name: "email",
        id: "email",
        helper: "This email already exists",
        label: "Email",
        outlined: true,
       }),
       input({
        name: "password",
        id: "password",
        helper: "This password is too easy",
        label: "Password",
        outlined: true,
       }),
       input({
        name: "phone",
        id: "phone",
        helper: "This phone already exists",
        label: "Phone",
        outlined: true,
       }),
      ],
      submit: button({
        name: "Sign Up",
        href: 'signup'
      }),
    }),
    styles,
  };

  return tml({ ...baseCtx, ...ctx });
}
