import styles from './registrationForm.module.scss';

export const tmp = `
  <form>
    <div class=${styles.fields}>
      {{#each inputs}}
          {{{this}}}
      {{/each}}
    </div>
    <div class=${styles.controls}>
      {{{submitButton}}}
      {{{link}}}
    </div>
  </form>
`;
