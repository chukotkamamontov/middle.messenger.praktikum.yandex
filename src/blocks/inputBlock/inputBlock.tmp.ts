import styles from './inputBlock.module.scss';

export const tmp = `
  <div class=${styles.container} data-name="{{name}}">
    <label class=${styles.label} for="{{id}}">{{label}}</label>
    {{{input}}}
    {{{error}}}
  </div>
`;
