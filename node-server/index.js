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

app.get("/", (req, res) => {
  res.send("IT'S ALIVE!!!");
});

// get list of messages
app.get("/messages", (req, res) => {
  db("messages")
    .then(messages => {
      res.status(200).json(messages);
    })
    .catch(err => res.status(500).json(err));
});

// create a message
app.post("/messages", (req, res) => {
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

app.listen(port, () => console.log(`Listening on port ${port}`));
