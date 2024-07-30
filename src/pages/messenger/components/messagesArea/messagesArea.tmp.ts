import styles from './messagesArea.module.scss';

export const tmp = `
  <div>
    <ul class=${styles.messagesList}>
      {{#each messages}}
        {{{this}}}
      {{/each}}
    </ul>
  </div>
`;
