import styles from './textareaBlock.module.scss';

export const tmp = `
  <div class=${styles.inputBlock}>
    <label class=${styles.label} for="{{id}}">{{label}}</label>
    {{{textarea}}}
  </div>
  {{{error}}}
`;

