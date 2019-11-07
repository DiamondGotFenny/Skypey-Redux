import React from "react";
import "../components/Sidebar.css";
import User from "../containers/User";
import { Link } from "react-router-dom";

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map(contact => {
        return (
          <Link to="/">
            <User contact={contact} key={contact.user_id} />
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
