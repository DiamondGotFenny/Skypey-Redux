import React from "react";
import "../components/Main.css";
import Empty from "./Empty";
import ChatWindow from "../containers/ChatWindow";

const Main = ({ user, activUserId }) => {
  const renderMainContent = () => {
    if (!activUserId) {
      return <Empty user={user} activUserId={activUserId} />;
    } else {
      return <ChatWindow activUserId={activUserId} />;
    }
  };
  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;
