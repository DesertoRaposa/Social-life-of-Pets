import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      newPostText: 'i am a new post!',
      profileData: [
        {
          name: 'Morti G.',
          breed: 'British Shorthair',
          birth: 'August, 5',
          city: 'Moscow, Russia',
          postsquality: '127',
          followers: '200',
          following: '78'
        },
      ],
      postsData: [
        {
          id: '1',
          message: 'hi there',
          likesCount: '29'
        },
        {
          id: '2',
          message: 'how are u dog?',
          likesCount: '59'
        },
        {
          id: '3',
          message: 'Have a nice walk!',
          likesCount: '98'
        },
        {
          id: '4',
          message: 'Live my best life!',
          likesCount: '19'
        }
      ],
    },
    dialogsPage: {
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
      newMessageBody: ''
    },
    sitebar: {

    }
  },
  _callSubscriber() {
    console.log('State was changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;

window.store = store;