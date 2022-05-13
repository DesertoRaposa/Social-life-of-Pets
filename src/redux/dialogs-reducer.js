const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  newMessageBody: 'Here something new',
  usersDialogsData: [
    {
      id: '1',
      name: 'Bobby'
    },
    {
      id: '2',
      name: 'Dylan'
    },
    {
      id: '3',
      name: 'Mary'
    },
    {
      id: '4',
      name: 'Tom'
    },
    {
      id: '5',
      name: 'Ted'
    }
  ],
  messagesData: [
    {
      id: '1',
      message: 'Hi, how are you doing?',
    },
    {
      id: '2',
      message: 'I am fine. How about yourself?',
    },
    {
      id: '3',
      message: 'I am pretty good. Thanks for asking.',
    },
    {
      id: '4',
      message: 'No problem. So how have you been?',
    },
    {
      id: '5',
      message: 'I have been great. What about you?',
    }
    ,
    {
      id: '6',
      message: 'I have been good. I am walking right now.',
    }
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 50,
        message: state.newMessageBody
      };

      let stateCopy = { ...state };
      stateCopy.messagesData = [...state.messagesData];
      stateCopy.messagesData.push(newMessage);
      stateCopy.newMessageBody = '';
      return stateCopy;
    
    case UPDATE_NEW_MESSAGE_BODY: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.newBody;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => (
  {
    type: UPDATE_NEW_MESSAGE_BODY,
    newBody: body
  }
);

export default dialogsReducer;