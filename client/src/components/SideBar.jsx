
import React from "react";

import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";

const SideBar = ({ setChatLog }) => {
  const clearChat = () => {
    setChatLog([]);
  };

  return (
    <aside className="sidemenu">
      <div className="side-menu-button" onClick={clearChat}>
        <span>+</span>
        New Chat
      </div>
    </aside>
  );
};

export default SideBar;
