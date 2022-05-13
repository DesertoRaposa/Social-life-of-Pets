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
            {profileinfo.map((data) =>
              <ProfileInfo
                name={data.name}
                breed={data.breed}
                birth={data.birth}
                city={data.city}
                postsquality={data.postsquality}
                followers={data.followers}
                following={data.following}
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
