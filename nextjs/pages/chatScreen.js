import { useState, useEffect } from "react";
import Meta from "../components/meta";
import ChatForm from "../components/chatForm";
import ChatList from "../components/chatList";
import Axios from "axios";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    Axios.get("http://localhost:8549/api/messages").then(res => {
      const newMessages = res.data;
      setMessages(
        newMessages.map(message => {
          return message;
        })
      );
    });
  };

  useEffect(() => {
    getMessages();
  });

  return (
    <main>
      <Meta />
      <style jsx>{`
        main {
          background-color: #37474f;
          color: #7e8889;
          overflow-y: hidden;
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }
        section {
          max-width: 100%;
          width: 100vw;
          overflow-x: hidden;
          display: flex;
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;
          height: 100%;
        }
        div {
          margin: 0;
          padding: 0;
          height: 100%;
        }
      `}</style>
      <section>
        <div>
          <ChatList messages={messages} />
          <ChatForm />
        </div>
      </section>
    </main>
  );
};

export default ChatScreen;
