import { useState, useEffect } from "react";
import Header from "../components/header";
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
      <style jsx>{`
      body {
      }
      main {
        background-color: #142634;
        color: #7E8889;
      }
        section {
          max-width: 100%;
          width: 100vw;
          display: flex;
          justify-content: space-evenly;
        }
        div {
          width: 75vw;
          height: 85vh;
          border: 2px solid red;
          display: flex;
          justify-content: center;
        }
      `}</style>
      <Header />
      <section>
        <h2>{hello}</h2>
        <div>
          <ChatForm />
          <ChatList messages={messages} />
        </div>
      </section>
    </main>
  );
};

export default Index;
