import React from "react";
import "./ChatRoomHeader.css";

const ChatRoomHeader = ({ user }) => {
  const { name, status } = user;
  return (
    <div className="ChatRoomHeader">
      <h1 className="ChatRoomHeader__name">{name}</h1>
      <p className="ChatRoomHeader__status">{status}</p>
    </div>
  );
};

export default ChatRoomHeader;
