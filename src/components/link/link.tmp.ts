import styles from './link.module.scss';

export const tmp = `
  {{#if content}}
    <a class=${styles.link} href="{{to}}">{{{content}}}</a>
  {{else}}
    <a class=${styles.link} href="{{to}}">{{text}}</a>
  {{/if}}
`;
