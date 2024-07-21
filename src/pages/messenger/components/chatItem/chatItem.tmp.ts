import styles from './chatItem.module.scss';
import chat from '../../../../assets/images/defaultChat.png';

export const tmp = `
  <li>
    <div class=${styles.chat}>
      <div>
      {{#if chat.avatar}}
        <img 
          width="48" 
          height="48" 
          class=${styles.avatar} 
          src="https://ya-praktikum.tech/api/v2/resources{{chat.avatar}}" 
          alt=""
        >
      {{else}}
        <img 
          width="48" 
          height="48" 
          class=${styles.avatar} 
          src=${chat} 
          alt=""
        >
      {{/if}}
      </div>
      <div>
          <span>{{chat.title}}</span>
          <span>{{chat.last_message.content}}</span>
      </div>
      <div>
          <span>{{chat.last_message.time}}</span>
          {{#if chat.unread_count}}
            <span>{{chat.unread_count}}</span>
          {{/if}}
      </div>
    </div>
  </li>
`;
