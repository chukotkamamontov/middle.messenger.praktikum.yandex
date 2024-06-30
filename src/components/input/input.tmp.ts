import styles from './input.module.scss';

export const tmp = `
    <input
      class=${styles.input}
      type="{{type}}" 
      id="{{id}}"
      name="{{name}}"
      placeholder="{{placeholder}}"
    />
`;
