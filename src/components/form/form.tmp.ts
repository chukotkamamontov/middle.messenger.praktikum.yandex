import styles from './form.module.scss';

export const tmp = `
  <div class=${styles.leftPanel}>
    <h1 class=${styles.header}>
        {{data}}
    </h1>
  </div>
`;

// <form class='{{styles.container}}'>
//   <div>
//     {{#each inputs}}
//       {{{this}}}
//     {{/each}}
//   </div>
//   <div class='{{styles.buttons}}'>
//     {{{submit}}}
//   </div>
// </form>
