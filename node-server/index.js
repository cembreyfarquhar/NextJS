require("dotenv").config();

const express = require("express");
const knex = require("knex");
const cors = require("cors");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// check if server is up
app.get("/", (req, res) => {
  res.send("Wow it's working!!!");
});

// get list of todos
app.get("/todos", (req, res) => {
  db("todos")
    .then(notes => {
      res.status(200).json(notes);
    })
    .catch(err => res.status(500).json(err));
});

// create a todo
app.post("/todos", (req, res) => {
  const todo = req.body.input;

  db("todos")
    .insert({ task: todo })
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
