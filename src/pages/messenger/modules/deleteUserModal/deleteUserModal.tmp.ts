import styles from './deleteUserModal.module.scss';

export const tmp = `
  <div class=${styles.modal}>
    <div class=${styles.content}>
        <h2 class=${styles.title}>Удалить пользователя</h2>
        {{{form}}}
        {{{button}}}
    </div>
  </div>
`;
