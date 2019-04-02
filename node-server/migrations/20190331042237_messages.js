exports.up = function(knex, Promise) {
  return knex.schema.createTable("messages", tbl => {
    // primary key
    tbl.increments();

    tbl.string("author", 128).notNullable();
    tbl.string("text", 255).notNullable();
    tbl.string("dateTime", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("messages");
};
