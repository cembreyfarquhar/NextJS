const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(() => {
      // Inserts seed entries

      const alicePass = bcrypt.hashSync("pass");
      const bobPass = bcrypt.hashSync("pass");

      return knex("users").insert([
        { id: 1, username: "Alice", password: alicePass },
        { id: 2, username: "Bob", password: bobPass }
      ]);
    });
};
