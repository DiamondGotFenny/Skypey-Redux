import { combineReducers } from "redux";
import contacts from "./contacts";
import user from "./user";
import activUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";

export default combineReducers({
  contacts,
  user,
  activUserId,
  messages,
  typing
});
