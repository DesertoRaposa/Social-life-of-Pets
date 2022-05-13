import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import ProfileContainer from '../Profile/ProfileContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';

const Content = ({ store, profilePage }) => {
  return (
    <Routes>
      <Route
        path="/"
      />
      <Route
        path="/profile"
        element={
          <ProfileContainer
            profilePage={profilePage}
            store={store}
          />}
      />
      <Route
        exact path="/dialogs/*"
        element={
          <DialogsContainer 
            store={store} 
          />
        }
      />
    </Routes>
  );
};

export default Content;