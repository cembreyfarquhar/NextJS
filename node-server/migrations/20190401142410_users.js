exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", tbl => {
      // primary key
      tbl.increments();
  
      tbl.string("username", 16);
      tbl.string("password", 38);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("users");
  };