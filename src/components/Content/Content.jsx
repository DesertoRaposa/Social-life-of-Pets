import React from 'react';
import Profile from '../Profile/Profile';
import {
  Routes,
  Route
} from "react-router-dom";
import Dialogs from '../Dialogs/Dialogs';

const Content = ({ profiles, dialogs, messages }) => {
  return (
    <Routes>
      <Route
        path="/profile"
        element={<Profile profiles={profiles} />}
      />
      <Route
        exact path="/dialogs/*"
        element={<Dialogs
          dialogs={dialogs}
          messages={messages}
        />
        }
      />
    </Routes>
  )
}

export default Content;