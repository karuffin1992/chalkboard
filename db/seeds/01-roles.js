
exports.seed = async (knex, Promise) => {
  await knex('roles').del();
  await knex.raw('ALTER SEQUENCE roles_id_seq restart with 3;');
  // Deletes ALL existing entries
  return knex('roles').insert([
    {
      id: 1,
      name: 'Administrator',
      code: 'ADMIN'
    },
    {
      id: 2,
      name: 'Student',
      code: 'STDNT'
    }
  ]);
};