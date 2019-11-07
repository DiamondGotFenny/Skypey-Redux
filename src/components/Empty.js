import React from "react";
import "./Empty.css";

const Empty = ({ user, activUserId }) => {
  const { name, profile_pic, status } = user;
  const first_name = name.split(" ")[0];

  return (
    <div className="Empty">
      <h1 className="Empty__name">{first_name}</h1>
      <img className="Empty__img" src={profile_pic} alt={name}></img>
      <p className="Empty__status">
        <b>Status: </b>
        {status}
      </p>
      <button className="Empty__btn">Start A Conversation</button>
      <p className="Empty__info">
        {" "}
        Search for someone to start chatting with or go to Contacts to see who
        is available
      </p>
    </div>
  );
};

export default Empty;
