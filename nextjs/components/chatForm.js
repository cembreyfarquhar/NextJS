import { useState } from "react";
import Axios from "axios";
import moment from "moment";

const ChatForm = () => {
  const [text, setMsgInput] = useState("");
  const author = localStorage.getItem("username");
  const dateTime = 'hey'

  const addMessage = event => {
    event.preventDefault();
    const message = { author, text };
    setMsgInput("");
    Axios.post("http://localhost:8549/api/messages", message)
      .then(res => {
        console.log("ADD MESSAGE ", res);
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={addMessage}>
      <style jsx>{`
        form {
          width: 100%;
          height: 100%;
          position: fixed;
        }
        input {
          width: 100%;
          max-width: 100vw;
          border: none;
          height: 18vh;
          font-size: 5rem;
          color: grey;
        }
      `}</style>
      <br />
      <input
        type="text"
        onChange={event => setMsgInput(event.target.value)}
        value={text}
      />
      <br />
    </form>
  );
};

export default ChatForm;
