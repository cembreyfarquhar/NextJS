import { useState } from "react";
import Axios from "axios";

const ChatForm = () => {
  const [text, setMsgInput] = useState("");
  const [author, setAuthor] = useState("");

  const addMessage = event => {
    event.preventDefault();
    const message = { author, text };
    setMsgInput("");
    Axios.post("http://localhost:8549/messages", message)
      .then(res => {
        console.log("ADD MESSAGE ", res);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <style jsx>{`
        div {
          width: 100%;
          position: absolute;
        }
        form {
          width: 100%;
        }
        input {
          width: 100%;
          max-width: 100vw;
          height: 10vh;
        }
      `}</style>
      <form onSubmit={addMessage}>
        <br />
        <input
          type="text"
          onChange={event => setMsgInput(event.target.value)}
          value={text}
        />
        <br />
      </form>
    </div>
  );
};

export default ChatForm;
