import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({
  messages,
  users,
  newMessageBody,
  onNewMessageChange,
  onSendMessageClick
}) => (
  <div className="content">
    <div className="dialogs__wrapper">
      <div className="dialogs__names">
        {users.map(({id, name}) => 
        <DialogItem
          id={id}
          name={name}
          key={id}
        />
        )}
      </div>
      <div className="dialogs__messages">
        {messages.map(({id, message}) => <Message
          message={message}
          id={id}
          key={id}
        />
        )}

        <div className="dialogs__input">
          <form>
            <input
              className="posts__input"
              onChange={(e) => onNewMessageChange(e.target.value)}
              value={newMessageBody}
            />
          </form>
        </div>
        <button
          className="dialogs__button"
          onClick={onSendMessageClick}
        >
          Send
        </button>
      </div>

    </div>
  </div>
);  

export default Dialogs;