import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo';

const Profile = ({ profiles }) => {
  return (
    <>
      <div className='content'>
        <div className='content__image' />
        <div className="content__wrapper">
          <div className="profile">
            {profiles.map((data) =>
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
          <Posts />
        </div>
      </div>
    </>
  )
}

export default Profile;
