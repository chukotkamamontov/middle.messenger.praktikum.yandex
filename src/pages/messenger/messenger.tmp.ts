import styles from './messenger.module.scss';
import chat from '../../assets/images/defaultAvatar.jpg';

export const tmp = `
  <main class=${styles.messenger}>
    <div class=${styles.panel}>
      {{{avatarLink}}}
    </div>
    <section class=${styles.section}>
        <div class=${styles.container}>
          <div class=${styles.sidebar}>
            <div>
              <div class=${styles.searchBlock}>
                  {{{searchInput}}}
              </div>
              <ul class=${styles.chats}>
                {{#each chats}}
                  {{{this}}}
                {{/each}}
              </ul>
            </div>
            <div class=${styles.createChatButtonBlock}>
              {{{createChatButton}}}
            </div>
          </div>
          
          <div class=${styles.current}>
            {{#if selectedChat}}
                <div class=${styles.top}>
                  <div class=${styles.topInfo}>
                      <span class=${styles.talkerName}>{{selectedChat.title}}</span>
                      <span class=${styles.status}>В сети</span>
                      {{{optionsButton}}}
                      {{#if optionsVisible}}
                        {{{options}}}
                      {{/if}}
                  </div>
                </div>
            {{/if}}

            {{#unless selectedChat}}
              <div class=${styles.instruction}>
              <p>Выбери чат, чтобы отправить сообщение</p>
              <img width="120" height="120" src=${chat} alt="">
              <p>...или создай новый</p>
          </div>
            {{/unless}}

            {{#if isCreateChatPopupOpen}}
              {{{createChatModal}}}
            {{/if}}

            {{#if isAddUserPopupOpen}}
              {{{addUserModal}}}
            {{/if}}

            {{#if isDeleteUserPopupOpen}}
              {{{deleteUserModal}}}
            {{/if}}

            {{#if isChatAvatarPopupOpen}}
              {{{changeChatAvatarPopup}}}
            {{/if}}

            {{#if selectedChat}}
              {{{messagesArea}}}
              {{{messageForm}}}
            {{/if}}
          </div>
      </div>
  </section>
  </main>
`;
