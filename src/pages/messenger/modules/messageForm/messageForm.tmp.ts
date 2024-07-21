import styles from './messageForm.module.scss';

export const tmp = `
  <form class=${styles.form}>
    <label class=${styles.label} for="file"></label>
    {{#each inputs}}
      {{{this}}}
    {{/each}}
    <button class=${styles.button} type="submit"></button>
  </form>
`;
