import React from 'react';
import Profile from '../Profile/Profile';

const Content = () => {
  return (
    <>
      <div className='content'>
        <div className='content__image' />
        <div className="content__wrapper">
          <Profile />
        </div>
      </div>
    </>

  )
}

export default Content;