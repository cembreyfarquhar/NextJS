exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("messages")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("messages").insert([
        { id: 1, author: "Mark", text: "Hello this is a seed message!" },
        { id: 2, author: "Mark", text: "This is a seed too!" }
      ]);
    });
};