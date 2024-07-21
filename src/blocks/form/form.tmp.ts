import styles from './form.module.scss';

export const tmp = `
  <div class=${styles.fields}>
    {{#each inputs}}
        {{{this}}}
    {{/each}}
  </div>
  <div class=${styles.controls}>
    {{{submitButton}}}
    {{{link}}}
  </div>
`;
