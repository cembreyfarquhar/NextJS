
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(() => {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'First task'},
        {id: 2, task: 'Second todo'},
        {id: 3, task: 'third todo'}
      ]);
    });
};
