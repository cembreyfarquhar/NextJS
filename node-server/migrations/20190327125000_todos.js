exports.up = function(knex, Promise) {
  return knex.schema.createTable("todos", tbl => {
    // primary key
    tbl.increments();

    tbl.string("task", 255);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("todos");
};
