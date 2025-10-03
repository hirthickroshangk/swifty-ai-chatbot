import React, { useState } from "react";

import SideBar from "./components/SideBar";
import ChatBox from "./components/ChatBox";
import "./index.css";
import "./normal.css";

import { useEffect } from "react";




const App = () => {
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "Hello User! How can I help you today?",
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top after component mounts
  }, []); // empty dependency => runs once on mount

 

  return (
    <div className="App">
      <SideBar setChatLog={setChatLog} />
      <div className="chatbox">
        <ChatBox chatLog={chatLog} setChatLog={setChatLog} />
      </div>
      <div></div>
    </div>
  );
};

export default App;
