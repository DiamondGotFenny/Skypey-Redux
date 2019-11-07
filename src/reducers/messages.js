import { SET_CHAT_MESSAGES, SEND_MESSAGE } from "../constants/action_type";
import { getMessages } from "../static_data";
import _ from "lodash";

export default function messages(state = getMessages(10), action) {
  if (action.type === SET_CHAT_MESSAGES) {
    return action.payload;
  } else if (action.type === SEND_MESSAGE) {
    const { message, userId } = action.payload;
    const allUserMsgs = state[userId];
    const number = +_.keys(allUserMsgs).pop() + 1;
    return {
      ...state,
      [userId]: {
        ...allUserMsgs,
        [number]: {
          number,
          text: message,
          is_user_msg: true
        }
      }
    };
  }
  return state;
}
