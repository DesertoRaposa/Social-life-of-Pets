import React from 'react';
import Profile from '../Profile/Profile';
import {
  Routes,
  Route
} from "react-router-dom";
import Dialogs from '../Dialogs/Dialogs';

const Content = ({ profilePage, dialogsPage, dispatch }) => {
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
            dispatch={dispatch}
            newPostText={profilePage.newPostText}
          />}
      />
      <Route
        exact path="/dialogs/*"
        element={<Dialogs
          dialogsPage={dialogsPage}
          dispatch={dispatch}
        />
        }
      />
    </Routes>
  )
}

export default Content;