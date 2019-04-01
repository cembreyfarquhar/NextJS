exports.up = function(knex, Promise) {
  return knex.schema.createTable("messages", tbl => {
    // primary key
    tbl.increments();

    tbl.string("author", 128);
    tbl.string("text", 255);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("messages");
};
