import styles from './input.module.scss';

export const tmp = `
  <div>
    <label class=${styles.label}>
      {{label}}:
    </label>
    <input
      class=${styles.input}
      type="{{type}}" 
      id="{{id}}"
      name="{{name}}"
      placeholder="{{placeholder}}"
    />
  </div>
`;

