import React from 'react';
import m from '../../../img/m.jpg';

const Message = ({ message }) => {
  return (
    <>
        <div className="dialogs__item">
          <div className="dialogs__img">
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
          <p className="dialogs__text">
            {message}
          </p>
        </div>
    </>
  );
};

export default Message;