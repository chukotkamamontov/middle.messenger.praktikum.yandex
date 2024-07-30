import styles from './editProfileForm.module.scss';

export const tmp = `
  <form>
    <div class=${styles.fields}>
      {{#each inputs}}
          {{{this}}}
      {{/each}}
    </div>
    <div>
      {{{submitButton}}}
    </div>
  </form>
`;
