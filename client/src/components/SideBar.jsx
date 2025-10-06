
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
      <div>
      Note:
      This demo website is hosted on a free-tier backend server. Due to the server’s idle timeout policy, the first chat 
      response may take approximately 20–30 seconds after a period of inactivity, as the server “wakes up.” Subsequent 
      messages will respond instantly. This is a demo hosted on a free-tier server; full production would respond instantly. 
      Please allow a few moments for the initial response when testing the chatbot.
      </div>
    </aside>
  );
};

export default SideBar;
