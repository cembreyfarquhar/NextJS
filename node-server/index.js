require("dotenv").config();

const express = require("express");
const knex = require("knex");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("IT'S ALIVE!!!");
});

///       MESSAGES
///       MESSAGES
///       MESSAGES
///       MESSAGES

// get list of messages
app.get("/api/messages", (req, res) => {
  db("messages")
    .then(messages => {
      res.status(200).json(messages);
    })
    .catch(err => res.status(500).json(err));
});

// create a message
app.post("/api/messages", (req, res) => {
  const { author, text } = req.body;

  db("messages")
    .insert({ author, text })
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

///       USERS
///       USERS
///       USERS
///       USERS

// get list of users
// !!! should be restricted !!!
app.get("/api/users", (req, res) => {
  db("users")
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(500).json(err));
});

// login user
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  db("users")
    .where({ username })
    .first()
    .then(user => {
      // check password guess against db
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ username: user.username });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
