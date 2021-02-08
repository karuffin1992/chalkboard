exports.up = (knex, Promise) => {
    return knex.schema.createTable('course_attachments', (table) => {
        table.increments();
        table.integer('course_id').unsigned().references('id').inTable('courses');
        table.integer('attach_id').unsigned().references('id').inTable('attachments');
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('course_attachments');
};
