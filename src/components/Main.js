import React from "react";
import "../components/Main.css";
import Empty from "./Empty";
import StartChat from "./StartChat";
import { Route, Switch } from "react-router-dom";
import ChatWindow from "./../containers/ChatWindow";

const Main = ({ user, activUserId }) => {
  const renderMainContent = () => {
    if (activUserId) {
      return (
        <Switch>
          <Route exact path="/">
            <StartChat user={user} activUserId={activUserId} />
          </Route>
          <Route path="/ChatWindow">
            <ChatWindow activUserId={activUserId} />
          </Route>
        </Switch>
      );
    } else {
      return <Empty />;
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
