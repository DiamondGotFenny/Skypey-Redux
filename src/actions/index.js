import { SET_ACTIVE_USER_ID } from "../constants/action_type";
import { SET_CHAT_MESSAGES } from "../constants/action_type";
import { SET_TYPING_VALUE } from "../constants/action_type";
import { SEND_MESSAGE } from "../constants/action_type";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setChatMessages = messages => ({
  type: SET_CHAT_MESSAGES,
  payload: messages
});

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: { message, userId }
});
