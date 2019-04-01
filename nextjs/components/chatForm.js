import { useState } from "react";
import Axios from "axios";

const ChatForm = () => {
  const [text, setMsgInput] = useState("");
  const [author, setAuthor] = useState("");

  const addMessage = event => {
    event.preventDefault();
    const message = { author, text };
    Axios.post("http://localhost:8549/messages", message)
      .then(res => {
        console.log("ADD MESSAGE ", res);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form>
        <h2>Send a message</h2>
        <label>Author: </label>
        <input type="text" onChange={event => setAuthor(event.target.value)} />
        <br />
        <input
          type="text"
          onChange={event => setMsgInput(event.target.value)}
          value={text}
        />
        <br />
        <button onClick={addMessage}>Send Message</button>
      </form>
    </div>
  );
};

export default ChatForm;
