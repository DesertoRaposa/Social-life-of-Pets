const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 9,
        message: state.newPostText,
        likesCount: 0
      };

      let stateCopy = {...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state };

      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) => (
  {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
);

export default profileReducer;