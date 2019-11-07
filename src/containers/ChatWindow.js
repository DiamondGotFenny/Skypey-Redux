import React from "react";
import store from "../store/index";
import ChatRoomHeader from "../components/ChatRoomHeader";
import ChatRoomMsgs from "../components/ChatRoomMsgs";
import "./ChatWindow.css";
import MessageInput from "./MessageInput";
const ChatWindow = ({ activUserId }) => {
  const state = store.getState();
  console.log(state);
  const activeUser = state.contacts[activUserId];
  const messages = state.messages[activUserId];
  const { typing } = state;

  return (
    <div className="ChatWindow">
      <ChatRoomHeader user={activeUser} />
      <ChatRoomMsgs messages={messages} />
      <MessageInput value={typing} />
    </div>
  );
};

export default ChatWindow;
