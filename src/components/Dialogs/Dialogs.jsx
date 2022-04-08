import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ dialogsPage }) => {

  // let newPostElement = React.createRef();

  // let addPost = () => {
  //   let text = newPostElement.current.value;
  //   alert(text);
  // }

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

          <textarea  name="story"
            rows="5" cols="20">
            It was a dark and stormy night...
          </textarea>
          <button
            className="dialogs__button"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  )
}

export default Dialogs;