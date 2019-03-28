// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "../node-server/todos.sqlite3"
    }
  },
  useNullAsDefault: true,
  migrations: {
    migrations: "../node-server/migrations/"
  },
  seeds: {
    directory: "../node-server/seeds"
  }
};
