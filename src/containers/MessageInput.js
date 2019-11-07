import React from "react";
import store from "./../store/index";
import { setTypingValue, sendMessage } from "./../actions/index";
import "./MessageInput.css";

const MessageInput = ({ value }) => {
  const state = store.getState();
  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { typing, activUserId } = state;
    store.dispatch(sendMessage(typing, activUserId));
  };
  return (
    <form className="MessageInput" onSubmit={handleSubmit}>
      <input
        className="MessageInput__input"
        onChange={handleChange}
        value={value}
        placeholder="writing a message"
      />
    </form>
  );
};

export default MessageInput;
