import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
  updateNewMessageBodyCreator,
  sendMessageCreator
} from '../../redux/dialogs-reducer';

const Dialogs = ({ dialogsPage, dispatch }) => {

  let onSendMessageClick = () => {
    dispatch(sendMessageCreator());
  };


  let onNewMessageChange = (e) => {
   let body = e.target.value;
   dispatch( updateNewMessageBodyCreator(body));
  }

  return (
    <div className="content">
      <div className="dialogs__wrapper">
        <div className="dialogs__names">
          {dialogsPage.usersDialogsData.map((data) => <DialogItem
            id={data.id}
            name={data.name}
          />
          )}
        </div>
        <div className="dialogs__messages">
          {dialogsPage.messagesData.map((data) => <Message
            message={data.message}
            id={data.id}
          />
          )}

          <div className="dialogs__input">
            <form>
              <textarea
                className="posts__input"
                onChange={onNewMessageChange}
                value={dialogsPage.newMessageBody}
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
  )
}

export default Dialogs;