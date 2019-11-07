import { SET_ACTIVE_USER_ID } from "../constants/action_type";

export default function activUserId(state = null, action) {
  if (action.type === SET_ACTIVE_USER_ID) {
    return action.payload;
  }
  return state;
}
