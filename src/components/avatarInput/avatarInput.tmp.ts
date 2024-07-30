import styles from './avatarInput.module.scss';

export const tmp = `
  <div>
    {{{avatar}}}
    <label class=${styles.label}>
      <span>Изменить фото</span>
      <input class=${styles.input} type="file" accept="image/*" name="avatar">
    </label>
  </div>
`;
