import styles from './messenger.module.scss';

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
              {{{messagesArea}}}
              {{{messageForm}}}
            {{/if}}
          </div>
      </div>
  </section>
  </main>
`;

