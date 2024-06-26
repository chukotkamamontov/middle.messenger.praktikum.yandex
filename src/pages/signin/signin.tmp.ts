import styles from './signin.module.scss';

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
