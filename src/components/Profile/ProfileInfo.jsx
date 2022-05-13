import React from 'react';
import m from '../../img/m.jpg';
import loc from '../../img/loc.png';

const ProfileInfo = ({
  name,
  breed,
  birth,
  city,
  postsquality,
  followers,
  following
}) => {
  return (
    <>
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
          {name}
        </p>
        <p className="profile__breed">
          {`Breed: ${breed}`}
        </p>
        <p className="profile__birth">
        {`Birthday: ${birth}`}
        </p>
        <div className="profile__city">
          <img
            src={loc}
            alt="avatar"
            aria-label="avatar"
          />
          {city}
        </div>
      </div>
      <div className="stats">
        <div className="stats__item">
          <p className="stats__name">
            Posts
          </p>
          <p className="stats__quality">
            {postsquality}
          </p>
        </div>
        <div className="stats__item">
          <p className="stats__name">
            Followers
          </p>
          <p className="stats__quality">
            {followers}
          </p>
        </div>
        <div className="stats__item">
          <p className="stats__name">
            Following
          </p>
          <p className="stats__quality">
            {following}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;