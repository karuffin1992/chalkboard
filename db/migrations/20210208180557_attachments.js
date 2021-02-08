exports.up = (knex, Promise) => {
    return knex.schema.createTable('attachments', (table) => {
        table.increments();
        table.text('name').notNullable();
        table.text('path').notNullable();
        table.timestamp('create_date').notNullable();
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('attachments');
};
