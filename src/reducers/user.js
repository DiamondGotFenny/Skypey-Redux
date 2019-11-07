import { SET_ACTIVE_USER } from "./../constants/action_type";
import { generateUser } from "../static_data";

export default function user(state = generateUser(), action) {
  if (action.type === SET_ACTIVE_USER) {
    return action.payload;
  }
  return state;
}
