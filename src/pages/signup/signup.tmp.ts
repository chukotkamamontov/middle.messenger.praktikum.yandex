import styles from './signup.module.scss';

export const tmp = `
  <div class=${styles.container}>
    <form>
      {{#each inputs}}
        {{{this}}}
    {{/each}}
    </form>
    {{{link}}}
  </div>
`;
