const ChatList = ({ messages }) => {
  return (
    <ul>
      <style jsx>{`
        ul {
          height: 100%;
          width: 100%;
          display: flex;
          text-align: right;
          padding: 0;
          flex-direction: column-reverse;
        }
        li {
          font-size: 1.6rem;
          list-style: none;
          margin: 20px;
        }
        .Mark {
          border: 1px solid orange;
          border-radius: 15px;
          padding: 12px;

          color: orange;
        }
        .Chance {
          color: lightblue;
          border: 1px solid lightblue;
          border-radius: 15px;
          padding: 12px;
          text-align: left;
        }
      `}</style>
      {messages.reverse().map(msg => {
        return <li className={msg.author}>{msg.author.toString().split('')[0]}-  {msg.text}</li>;
      })}
    </ul>
  );
};

export default ChatList;
