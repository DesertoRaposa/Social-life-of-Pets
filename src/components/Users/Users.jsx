import React, { useEffect } from 'react';
import * as axious from 'axios';

const Users = ({
  users,
  unfollow,
  follow,
  setUsers,
  totalUsersCount,
  pageSize,
  currentPage
}) => {

  useEffect(() => {
    if (users.length === 0) {
      axious.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          setUsers(response.data.items)
        })
    }
  }, []);

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div className='content'>
    <div>
      {
        pages.map((p => (
          <span className={currentPage === p ? 'selected' : ""}>
            {p}
          </span>
        ))
        )
      }
    </div>
    {
      users.map(({ id, photos, name, status, uniqueUrlName, followed }) =>
        <div className='users' key={id}>
          <div className="posts__item posts__item--user">
            <div className='users__wrapper'>
              <div className="users__img">
                <img
                  src={photos.small !== null ? small : 'https://images.unsplash.com/photo-1559214369-a6b1d7919865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
                  alt="avatar"
                  aria-label="avatar"
                />
              </div>
              <p className="users__text">
                {name}
              </p>
              <p className="users__text users__text--nick">
                {uniqueUrlName}
              </p>
              <p className="users__text">
                {status}
              </p>
            </div>
            <p className="users__location">
              {/* {u.location.city}, <br />{u.location.country} */}
            </p>
            <div onClick={() => { followed ? unfollow(id) : follow(id); }} className="users__button">
              {followed ? 'Unfollow' : 'Follow'}
            </div>
          </div>
        </div>)
    }
  </div>;
};

export default Users;