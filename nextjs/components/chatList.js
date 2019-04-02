import { useState } from "react";

const ChatList = ({ messages }) => {
  // const [prevMsg, setPrevMsg] = useState({});

  let prevMsg = {};

  messages.forEach(msg => {
    prevMsg = msg;
  })

  return (
    <ul>
      <style jsx>{`
        ul {
          height: 78vh;
          width: 95%;
          margin-left: -2.5%;
          overflow-y: scroll;
          display: flex;
          text-align: right;
          flex-direction: column-reverse;
        }
        ul::-webkit-scrollbar {
          -webkit-box-shadow: inset 0 0 6px rgba(50, 100, 25, 0.3);
          border-radius: 10px;
          background-color: #d5f922;
          height: 30px;
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

          color: orange;
        }
        .other {
          color: lightblue;
          border: 1px solid lightblue;
          border-radius: 15px;
          padding: 12px;
          text-align: left;
        }
        p {
          text-align: left;
          color: white;
          font-size: 1.6rem;
        }
      `}</style>
      {messages.reverse().map(msg => {
        return (
          <>
            <li
              className={
                msg.author === localStorage.getItem("username")
                  ? "user"
                  : "other"
              }
            >
              {msg.author}- {msg.text}
            </li>
          </>
        );
      })}
      <p>Last message: {JSON.stringify(prevMsg)}</p>
    </ul>
  );
};

export default ChatList;
