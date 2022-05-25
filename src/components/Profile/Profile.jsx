import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo';

const Profile = ({ profileinfo, store }) => {
  return (
    <>
      <div className='content'>
        <div className='content__image' />
        <div className="content__wrapper">
          <div className="profile">
            {profileinfo.map(({
              birth,
              name,
              breed,
              city,
              postsquality,
              followers,
              following
            }) =>
              <ProfileInfo
                key={birth}
                name={name}
                breed={breed}
                birth={birth}
                city={city}
                postsquality={postsquality}
                followers={followers}
                following={following}
              />
            )
            }
          </div>
          <PostsContainer store={store} />
        </div>
      </div>
    </>
  );
};

export default Profile;
