import styles from './createChatModal.module.scss';

export const tmp = `
  <div class=${styles.modal}>
    <div class=${styles.content}>
        <h2 class=${styles.title}>Создать чат</h2>
        {{{form}}}
        {{{button}}}
    </div>
  </div>
`;
