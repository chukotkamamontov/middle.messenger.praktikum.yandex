
export const tmp = `
  <main>
    <section>
      <h1>навигация по страницам</h1>
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
