exports.up = (knex, Promise) => {
    return knex.schema.createTable('user_roles', (table) => {
        table.increments();
        table.integer('user_id').unsigned().references('id').inTable('users');
        table.integer('role_id').unsigned().references('id').inTable('roles');
        table.timestamp('create_date').notNullable();
        table.timestamp('update_date');
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('user_roles');
};
