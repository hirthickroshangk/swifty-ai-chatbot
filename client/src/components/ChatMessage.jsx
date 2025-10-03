import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

import bot from "../assets/bot.svg";
import human from "../assets/user.svg";

const ChatMessage = ({ message, user }) => {
  return (
    <div className={`chat-message ${user}`}>
      <div className={`avatar ${user}`}>
        <img
          src={user === "gpt" ? bot : human}
          alt={user === "gpt" ? "bot" : "human"}
        />
      </div>
      <div className="message">
        {user === "gpt" && (
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              fontSynthesis: "none",
            }}
            startDelay={100}
            cursorColor="black"
            text={message}
            typeSpeed={20}
            eraseSpeed={100}
            hideCursorAfterText="true"
          />
        )}
        {user === "human" && <div className="message">{message}</div>}
      </div>
    </div>
  );
};

export default ChatMessage;

