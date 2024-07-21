import styles from './inputBlock.module.scss';

export const tmp = `
  <div class=${styles.inputBlock}>
    <label class=${styles.label} for="{{id}}">{{label}}</label>
    {{{input}}}
  </div>
  {{{error}}}
`;
// export const tmp = `
//   <label class=${styles.label} for="{{id}}">{{label}}</label>
//   {{{input}}}
//   {{{error}}}
// `;
