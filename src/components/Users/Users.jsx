import React from 'react';

let Users = ({
  users,
  unfollow,
  follow,
  setUsers
}) => {

  if (users.length === 0) {
    setUsers(
      [
        {
          photoUrl: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          id: '1',
          fullName: 'Alistar',
          status: 'Hi i am a dog',
          followed: true,
          nick: '@crazydog',
          location: {
            city: 'Moscow',
            country: 'Russia'
          }
        },
        {
          photoUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          id: '2',
          fullName: 'Alice',
          status: 'Hi i am a cat',
          followed: true,
          nick: '@littlekitty',
          location: {
            city: 'Saint P',
            country: 'Russia'
          }
        },
        {
          photoUrl: 'https://images.unsplash.com/photo-1559214369-a6b1d7919865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          id: '3',
          fullName: 'Bobby',
          status: 'Hi i am a rabbit',
          followed: false,
          nick: '@happyrabbit',
          location: {
            city: 'Tver',
            country: 'Russia'
          }
        },
        {
          photoUrl: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80',
          id: '4',
          fullName: 'Dory',
          status: 'Hi i am a fish',
          nick: '@justaddwater',
          followed: false,
          location: {
            city: 'Kazan',
            country: 'Russia'
          }
        },
      ]
    );
  }


  return (
    <div className='content'>
      {
        users.map(u => <div className='users' key={u.id}>
          <div className="posts__item posts__item--user">
            <div className='users__wrapper'>
              <div className="users__img">
                <img
                  src={u.photoUrl}
                  alt="avatar"
                  aria-label="avatar"
                />
              </div>
              <p className="users__text">
                {u.fullName}
              </p>
              <p className="users__text users__text--nick">
                {u.nick}
              </p>
              <p className="users__text">
                "{u.status}"
              </p>
            </div>

            <p className="users__location">
              {u.location.city}, <br />{u.location.country}
            </p>
            <div onClick={() => { u.followed ? unfollow(u.id) : follow(u.id); }} className="users__button">
              {u.followed ? 'Unfollow' : 'Follow'}
            </div>
          </div>
        </div>
        )
      }
    </div>
  );
};

export default Users;