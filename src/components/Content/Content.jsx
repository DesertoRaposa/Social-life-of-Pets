import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import ProfileContainer from '../Profile/ProfileContainer';
import DialogsContainer from '../Dialogs/DialogsContainer';
import UsersContainer from '../Users/UsersContainer';

const Content = ({ store, profilePage }) => {
  return (
    <Routes>
      <Route
        path="/"
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
      <Route
        exact path="/users/*"
        element={
          <UsersContainer
            store={store}
          />
        }
      />
    </Routes>
  );
};

export default Content;