// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./todos.sqlite3"
    }
  },
  useNullAsDefault: true,
  migrations: {
    migrations: "./migrations/"
  },
  seeds: {
    directory: "./seeds"
  }
};
