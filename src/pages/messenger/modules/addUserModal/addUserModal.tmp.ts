import styles from './addUserModal.module.scss';

export const tmp = `
  <div class=${styles.modal}>
    <div class=${styles.content}>
        <h2 class=${styles.title}>Добавить пользователя</h2>
        {{{form}}}
        {{{button}}}
    </div>
  </div>
`;
