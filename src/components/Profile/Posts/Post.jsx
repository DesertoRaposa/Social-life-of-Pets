import React from 'react';
import m from '../../../img/m.jpg';
import like from '../../../img/like.png';

const Post = ({ message, likesCount }) => {
  return (
    <div className="posts__wrapper">
      <div className="posts__item">
        <div className="posts__img">
          <picture>
            <source
              srcSet={m}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={m}
              media="(min-width: 768px)"
            />
            <img
              src={m}
              alt="avatar"
              aria-label="avatar"
            />
          </picture>
        </div>
        <p className="posts__text">
          {message}
        </p>
        <div className="posts__like">
          <img
            src={like}
            alt="avatar"
            aria-label="avatar"
          />
          <span>{likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;

