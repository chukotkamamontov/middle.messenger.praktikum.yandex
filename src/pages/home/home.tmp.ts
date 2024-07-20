import styles from './home.module.scss'

export const tmp = `
  <main class=${styles.home}>
    <section>
      <h1>Временная навигация по страницам</h1>
      <nav>
          <ul>
              {{#each links}}
                  <li>{{{this}}}</li>
              {{/each}}
          </ul>
      </nav>
    </section>
  </main>
`;
