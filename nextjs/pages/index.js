import { useState, useEffect } from "react";
import Header from "../components/header";
import Meta from "../components/meta";
import ChatForm from "../components/chatForm";
import ChatList from "../components/chatList";
import Axios from "axios";

const Index = () => {
  // const [todos, setTodos] = useState([]);
  // const [input, handleInput] = useState("");
  // useEffect(() => {
  //   getTodos();
  // });

  const [hello, setHello] = useState("uh");

  // Gets home screen message from server, which is being displayed as an h2
  Axios.get("http://localhost:8549/").then(res => {
    setHello(res.data);
  });

  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    Axios.get("http://localhost:8549/messages").then(res => {
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
        }
        section {
          max-width: 100%;
          width: 100vw;
          overflow-x: hidden;
          display: flex;
          justify-content: flex-end;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      {/* <Header /> */}
      <section>
        <div>
          <ChatList messages={messages} />
          <ChatForm />
        </div>
      </section>
    </main>
  );
};

export default Index;
