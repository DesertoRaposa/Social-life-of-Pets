import React from 'react';
import m from '../../img/m.jpg';

let Users = ({ users }) => {
  return (
    <>
      <div className='content'>
        {/* {
          users.map(u => <div key={u.id}>
            <span>
              <div>
                {u.fullName}
              </div>
            </span>
          </div>)
        } */}
        <div className='users'>
          <div className="posts__item posts__item--user">

            <div className='users__wrapper'>
              <div className="users__img">
                <img
                  src={m}
                  alt="avatar"
                  aria-label="avatar"
                />
              </div>
              <p className="users__text">
                Alexander G.
              </p>
              <p className="users__text users__text--nick">
                @crazydog
              </p>
              <p className="users__text">
                "Mama I'm a criminal"
              </p>
            </div>

            <p className="users__location">
                Moscow, Russia
              </p>
            <div className="users__button">
              Follow
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;