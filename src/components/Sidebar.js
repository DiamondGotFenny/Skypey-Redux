import React from "react";
import "../components/Sidebar.css";
import User from "../containers/User";

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map(contact => {
        return <User contact={contact} key={contact.user_id} />;
      })}
    </aside>
  );
};

export default Sidebar;
