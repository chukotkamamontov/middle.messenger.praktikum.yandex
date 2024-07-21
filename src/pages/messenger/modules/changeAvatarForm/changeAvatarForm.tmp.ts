import styles from './changeAvatarForm.module.scss';

export const tmp = `
  <form class=${styles.form}>
    {{#each inputs}}
      {{{this}}}
    {{/each}}
    {{{submitButton}}}
  </form>
`;
