import styles from './notFoundPage.module.scss';

export const tmpl = `
  <div class=${styles.container}>
    <div class=${styles.box}>
      <h1>{{statusCode}}</h1>
      <p>{{message}}</p>
      <div>
          {{{mainPageLink}}}
      </div>
    </div>
  </div>
`;
