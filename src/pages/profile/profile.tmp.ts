import styles from './profile.module.scss';

export const tmp = `
  <main class=${styles.container}>
    <section>
      <div class="wrapper">
          {{{avatar}}}

          <div>
              <div>
                  <span>ID:</span>
                  <span>{{id}}</span>
              </div>

              <div>
                  <span>Логин:</span>
                  <span>{{login}}</span>
              </div>

              <div>
                  <span>E-mail:</span>
                  <span>{{email}}</span>
              </div>

              <div>
                  <span>Имя:</span>
                  <span>{{first_name}}</span>
              </div>

              <div>
                  <span>Фамилия:</span>
                  <span>{{second_name}}</span>
              </div>

              <div>
                  <span>Имя в чате:</span>
                  <span>{{display_name}}</span>
              </div>

              <div>
                  <span>Телефон:</span>
                  <span>{{phone}}</span>
              </div>
          </div>
          <div class=${styles.links}>
                {{#each links}}
                  {{{this}}}
                {{/each}}
          </div>
          {{{logoutButton}}}
      </div>
  </section>
  </main>
`;
