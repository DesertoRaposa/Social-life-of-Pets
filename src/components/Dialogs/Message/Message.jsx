import React from 'react';
import m from '../../../img/m.jpg';

const Message = ({ message }) => {
  return (
    <>
      <div className="message">
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
        </div>
      </div>
    </>
  );
}

export default Message;