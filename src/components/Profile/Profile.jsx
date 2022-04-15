import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo';

const Profile = ({ profilePage, dispatch }) => {

  return (
    <>
      <div className='content'>
        <div className='content__image' />
        <div className="content__wrapper">
          <div className="profile">
            {profilePage.profileData.map((data) =>
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
          <Posts
            profilePage={profilePage}
            newPostText={profilePage.newPostText}
            dispatch={dispatch}
          />
        </div>
      </div>
    </>
  )
}

export default Profile;
