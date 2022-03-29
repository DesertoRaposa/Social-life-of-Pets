import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ dialogs, messages }) => {
  return (
    <div className="content">
      <div className="dialogs__wrapper">
        <div className="dialogs__names">
          {dialogs.map((data) => <DialogItem
            id={data.id}
            name={data.name}
          />
          )}
        </div>
        <div className="dialogs__messages">
          {messages.map((data) => <Message
            message={data.message}
            id={data.id}
          />
          )}
        </div>
      </div>
    </div>
  )
}

export default Dialogs;