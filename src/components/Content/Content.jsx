import React from 'react';
import Profile from '../Profile/Profile';
import {
  Routes,
  Route
} from "react-router-dom";
import Dialogs from '../Dialogs/Dialogs';

const Content = ({ profilePage, dialogsPage, addPost, updateNewPostText }) => {
  return (
    <Routes>
      <Route
        path="/"
      />
      <Route
        path="/profile"
        element={
          <Profile
            profilePage={profilePage}
            addPost={addPost}
            newPostText={profilePage.newPostText}
            updateNewPostText={updateNewPostText}
          />}
      />
      <Route
        exact path="/dialogs/*"
        element={<Dialogs
          dialogsPage={dialogsPage}
        />
        }
      />
    </Routes>
  )
}

export default Content;