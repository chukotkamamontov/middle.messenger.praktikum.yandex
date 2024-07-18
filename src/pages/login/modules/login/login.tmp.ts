import styles from './login.module.scss';

export const tmp = `
  <main>
    <section class=${styles.login}>
      <div class=${styles.container}>
          <h2 class=${styles.title}>Вход</h2>
          {{{loginForm}}}
      </div>
    </section>
    {{{logoutButton}}}
  </main>
`;
