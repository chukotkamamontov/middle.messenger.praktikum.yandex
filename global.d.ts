declare module '*.svg';
declare module '*.hbs' {
  function content(context: any, options?: any): string;
  export default content;
}
declare module '*.scss';
