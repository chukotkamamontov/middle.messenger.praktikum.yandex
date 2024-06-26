import styles from './profile.module.scss';

export const tmp = `
  <nav>
    <ul class=${styles.nav}>
        {{#each links}}
            <li>{{{this}}}</li>
        {{/each}}
    </ul>
  </nav>
`;
