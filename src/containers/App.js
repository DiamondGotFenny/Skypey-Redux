import React from "react";
import "../containers/App.css";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import store from "../store/index";
import _ from "lodash";
function App() {
  const { contacts, user, activUserId } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activUserId={activUserId} />
    </div>
  );
}

export default App;
