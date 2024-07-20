import styles from './home.module.scss';

export const tmp = `
  <nav>
    <ul class=${styles.nav}>
        {{#each links}}
            <li>{{{this}}}</li>
        {{/each}}
    </ul>
  </nav>
  <div class=${styles.home}>
    {{{leftPanel}}}
    {{{lenta}}}
  </div>
  
`;
