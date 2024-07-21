import styles from './chatOptions.module.scss';

export const tmp = `
  <div class=${styles.options}>
    {{#each buttons}}
      {{{this}}}
    {{/each}}
  </div>
`;
