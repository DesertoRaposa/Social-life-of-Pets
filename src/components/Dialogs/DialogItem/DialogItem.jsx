import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ id, name }) => {
  return (
    <>
      <div className="name active">
        <NavLink to={`/dialogs/${id}`} activeclassname="active">
          {name}
        </NavLink>
      </div>
    </>
  );
};

export default DialogItem;