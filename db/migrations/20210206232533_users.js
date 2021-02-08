exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.text('first_name').notNullable();
        table.text('last_name').notNullable();
        table.text('email').notNullable();
        table.text('password');
        table.boolean('is_verified').notNullable().default(false);
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users');
};
