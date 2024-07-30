import styles from './messageItem.module.scss';

export const tmp = `
  {{#if message.sent}}
    <li class="${styles.message} ${styles.sent}">
      <p class=${styles.text}>{{message.content}}</p>
      <span class=${styles.time}>{{message.time}}</span>
    </li>
  {{else}}
    <li class=${styles.message}>
      <p class=${styles.text}>{{message.content}}</p>
      <span class=${styles.time}>{{message.time}}</span>
    </li>
  {{/if}}
`;
