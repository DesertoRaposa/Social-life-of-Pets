import React from 'react';
import m from '../../img/m.jpg';
import Posts from './Posts/Posts';
import loc from '../../img/loc.png'

const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="profile__info">
          <div className="profile__avatar">
            <picture>
              <img
                src={m}
                alt="avatar"
                aria-label="avatar"
              />
            </picture>
          </div>
          <p className="profile__name">
            Morti G.
          </p>
          <p className="profile__breed">
            Breed: British Shorthair
          </p>
          <p className="profile__birth">
            Birthday: August, 5
          </p>
          <div className="profile__city">
              <img
                src={loc}
                alt="avatar"
                aria-label="avatar"
              />
            Moscow, Russia
          </div>
        </div>

        <div className="stats">
          <div className="stats__item">
            <p className="stats__name">
              Posts
            </p>
            <p className="stats__quality">
              127
            </p>
          </div>
          <div className="stats__item">
            <p className="stats__name">
              Followers
            </p>
            <p className="stats__quality">
              200
            </p>
          </div>
          <div className="stats__item">
            <p className="stats__name">
              Following
            </p>
            <p className="stats__quality">
              78
            </p>
          </div>
        </div>
      </div>
      <Posts />
    </>
  )
}

export default Profile;
