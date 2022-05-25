const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {
      id: '1',
      fullName: 'Bobby',
      status: 'Hi i am dog',
      followed: true,
      location: {
        city: 'Moscow',
        country: 'Russia'
      }
    },
    {
      id: '2',
      fullName: 'Dylan',
      status: 'Hi i am cat',
      followed: true,
      location: {
        city: 'Saint P',
        country: 'Russia'
      }
    },
    {
      id: '3',
      fullName: 'Mary',
      status: 'Hi i am hamster',
      followed: true,
      location: {
        city: 'Tver',
        country: 'Russia'
      }
    },
    {
      id: '4',
      fullName: 'Tom',
      status: 'Hi i am fish',
      followed: false,
      location: {
        city: 'Kazan',
        country: 'Russia'
      }
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          user.id === action.userId ? { ...user, followed: true } : user;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          user.id === action.userId ? { ...user, followed: false } : user;
        })
      };

    case SET_USERS: {
      return { ...state, users: [...state.users, action.users] };
    }
    default:
      return state;
  }
};

export const followAC = () => ({ type: FOLLOW, userId });
export const unfollowAC = () => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;