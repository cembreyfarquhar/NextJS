import { useState, useEffect } from "react";
import Header from "../components/header";
import Axios from "axios";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, handleInput] = useState("");
  useEffect(() => {
    getTodos();
  });

  const getTodos = () => {
    Axios.get("http://localhost:5000/todos")
      .then(res => {
        const todos = res.data;
        setTodos(
          todos.map(todo => {
            return todo.task;
          })
        );
      })
      .catch(err => console.log(err));
  };

  const addTodo = () => {
    Axios.post("http://localhost:5000/todos", { input })
      .then(res => {
        console.log("ADD TODO RESPONSE: ", res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <main>
      <style jsx>{`
        section {
          max-width: 100%;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
      <Header />
      <section>
        <h2>Todos</h2>
        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
        <form
          onSubmit={event => {
            event.preventDefault();
            addTodo();
            handleInput("");
          }}
        >
          <label>Task: </label>
          <input
            type="text"
            name="task"
            onChange={event => handleInput(event.target.value)}
            value={input}
          />
          <br />
        </form>
      </section>
    </main>
  );
};

export default Index;
