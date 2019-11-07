import React from "react";
import "./StartChat.css";
import { Link } from "react-router-dom";

const StartChat = ({ user, activUserId }) => {
  const { name, profile_pic, status } = user;
  const first_name = name.split(" ")[0];

  return (
    <div className="StartChat">
      <h1 className="StartChat__name">{first_name}</h1>
      <img className="StartChat__img" src={profile_pic} alt={name}></img>
      <p className="StartChat__status">
        <b>Status: </b>
        {status}
      </p>
      <Link to="/ChatWindow">
        <button className="StartChat__btn">Start A Conversation</button>
      </Link>
      <p className="StartChat__info">
        {" "}
        Search for someone to start chatting with or go to Contacts to see who
        is available
      </p>
    </div>
  );
};

export default StartChat;
