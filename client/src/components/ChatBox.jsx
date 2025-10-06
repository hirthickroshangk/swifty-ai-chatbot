import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";

import ChatMessage from "./ChatMessage";

const ChatBox = ({ chatLog, setChatLog }) => {
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatLog]);

  // HandleSubmit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!input.trim()) return;
  
    const newChatLogData = [...chatLog, { user: "human", message: input }];
  
    setInput("");
    setChatLog(newChatLogData);
  
    try {
      const response = await fetch("https://swifty-ai-chatbot.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }), // <--- Send only current input
      });
  
      const data = await response.json();
      console.log("Frontend received:", data); // <--- debug
  
      setChatLog([...newChatLogData, { user: "gpt", message: data.message || "No response" }]);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };
  
  return (
    <>

      <div className="chat-logo">
        <img src={logo} 
          alt="Swifty Log" 
          className="main-logo" 
        />
      </div>
      <div className="chat-log">
        {chatLog.map((item, i) => (
          <ChatMessage key={i} {...item} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-holder">
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chat-input-textarea"
            placeholder="Ask Swifty Anthing..."
          ></input>
        </form>
      </div>
      
    </>
  );
};

export default ChatBox;
