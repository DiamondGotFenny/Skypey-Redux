import { SET_TYPING_VALUE, SEND_MESSAGE } from "../constants/action_type";

export default function typing(state = "", action) {
  if (action.type === SET_TYPING_VALUE) {
    return action.payload;
  }
  if (action.type === SEND_MESSAGE) {
    return "";
  }
  return state;
}
