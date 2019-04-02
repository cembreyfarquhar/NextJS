exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("messages")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("messages").insert([
        {
          id: 1,
          author: "Alice",
          text: "Hello this is a seed message!",
          dateTime: "April 2nd 2019, 12:05"
        },
        {
          id: 2,
          author: "Bob",
          text: "This is a seed too!",
          dateTime: "April 2nd 2019, 12:07"
        }
      ]);
    });
};
