const ChatList = ({ messages }) => {
  return (
    <ul>
      {messages.map(msg => {
        return (
          <li>
            {msg.author} : {msg.text}
          </li>
        );
      })}
    </ul>
  );
};

export default ChatList;
