import Link from "next/link";
import { useState } from "react";
import Axios from "axios";

const Index = () => {
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const url = "http://localhost:8549";

  const login = event => {
    Axios.post(`${url}/api/login`, {
      username: usernameText,
      password: passwordText
    })
      .then(res => {
        if (res.status == 200) {
          localStorage.setItem("username", res.data.username);
        } else {
          alert("Invalid username or password. Try again");
        }
      })
      .catch(res => {
        console.log(res);
      });
  };

  return (
    <main>
      <section>
        <div>
          <h1>Welcome to _almost_ instant messenger!</h1>
          <h2>Please login below</h2>
          <div>
            <form onSubmit={login}>
              <label>Username: </label>
              <input
                type="text"
                onChange={event => setUsernameText(event.target.value)}
                value={usernameText}
              />
              <label>Password: </label>
              <input
                type="password"
                onChange={event => setPasswordText(event.target.value)}
                value={passwordText}
              />
              <Link href="chatScreen">
                <a>
                  <button onClick={login}>Login</button>
                </a>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
