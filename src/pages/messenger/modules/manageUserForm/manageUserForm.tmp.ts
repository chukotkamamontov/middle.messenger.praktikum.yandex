import styles from './manageUserForm.module.scss';

export const tmpl = `
  <form class=${styles.form}>
    {{#each inputs}}
      {{{this}}}
    {{/each}}
    {{{submitButton}}}
    {{#if success}}
      <span class=${styles.successNotification}>Успешно!</span>
    {{/if}}
  </form>
`;
