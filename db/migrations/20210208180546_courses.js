exports.up = (knex, Promise) => {
    return knex.schema.createTable('courses', (table) => {
        table.increments();
        table.text('name').notNullable();
        table.text('code').notNullable();
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('courses');
};
