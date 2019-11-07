import React from "react";
import "../containers/User.css";
import store from "./../store/index";
import { setActiveUserId, setActiveUser } from "./../actions/index";

const handleUserId = (id, user) => {
  store.dispatch(setActiveUserId(id));
  store.dispatch(setActiveUser(user));
};

const User = ({ contact: user }) => {
  const { name, profile_pic, status, user_id } = user;
  return (
    <div className="User" onClick={() => handleUserId(user_id, user)}>
      <img src={profile_pic} alt={name} className="User_pic"></img>
      <div className="User_details">
        <p className="User_details-name">{name}</p>
        <p className="User_details-status">{status}</p>
      </div>
    </div>
  );
};

export default User;
