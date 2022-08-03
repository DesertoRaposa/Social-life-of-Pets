const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
  users: [
    // {
    //       photoUrl: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    //       id: '1',
    //       fullName: 'Alistar',
    //       status: 'Hi i am a dog',
    //       followed: true,
    //       nick: '@crazydog',
    //       location: {
    //         city: 'Moscow',
    //         country: 'Russia'
    //       }
    //     },
    //     {
    //       photoUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    //       id: '2',
    //       fullName: 'Alice',
    //       status: 'Hi i am a cat',
    //       followed: true,
    //       nick: '@littlekitty',
    //       location: {
    //         city: 'Saint P',
    //         country: 'Russia'
    //       }
    //     },
    //     {
    //       photoUrl: 'https://images.unsplash.com/photo-1559214369-a6b1d7919865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    //       id: '3',
    //       fullName: 'Bobby',
    //       status: 'Hi i am a rabbit',
    //       followed: false,
    //       nick: '@happyrabbit',
    //       location: {
    //         city: 'Tver',
    //         country: 'Russia'
    //       }
    //     },
    //     {
    //       photoUrl: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80',
    //       id: '4',
    //       fullName: 'Dory',
    //       status: 'Hi i am a fish',
    //       nick: '@justaddwater',
    //       followed: false,
    //       location: {
    //         city: 'Kazan',
    //         country: 'Russia'
    //       }
    //     },
  ],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage:1
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u, followed: true
            };
          };
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u, followed: false
            };
          };
          return u;
        })
      };

    case SET_USERS: {
      return { ...state, users: action.users };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setUsersTotalCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });

export default usersReducer;