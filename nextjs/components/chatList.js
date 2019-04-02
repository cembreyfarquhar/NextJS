import { useState, useEffect } from "react";

const ChatList = ({ messages }) => {
  let prevMsg = {};

  const getMessageClassName = (msg, prevMsg) => {
    if (msg.author === localStorage.getItem("username")) {
      if (Math.abs(msg.dateTime - prevMsg.dateTime) < 5000) {
        return "user collection";
      } else {
        return "user";
      }
    } else {
      return "other";
    }
  };

  return (
    <div>
      <ul>
        <style jsx>{`
          div {
            height: 70vh;
          }
          ul {
            height: 70vh;
            width: 90%;
            overflow-y: scroll;
            overflow-x: hidden;
            text-align: right;
            display: flex;
            flex-direction: column;
          }
          li {
            font-size: 1.6rem;
            list-style: none;
            margin: 15px;
          }
          .user {
            border: 1px solid orange;
            border-radius: 15px;
            padding: 12px;
            background-color: orange;
            color: lightblue;
            text-align: right;
          }
          .other {
            color: organge;
            border: 1px solid lightblue;
            background-color: lightblue;
            border-radius: 15px;
            padding: 12px;
            text-align: left;
          }
          p {
            text-align: left;
            color: white;
            font-size: 1rem;
          }
          .collection {
            margin: 0px 15px;
            border-top: none;
            border-bottom: none;
            border-radius: 0px;
          }
        `}</style>
        {messages.map((msg, index, array) => {
          prevMsg = array[index - 1];
          return (
            <li className={getMessageClassName(msg, prevMsg)}>{msg.text}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChatList;
