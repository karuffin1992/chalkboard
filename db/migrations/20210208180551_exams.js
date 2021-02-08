exports.up = (knex, Promise) => {
    return knex.schema.createTable('exams', (table) => {
        table.increments();
        table.integer('course_id').unsigned().references('id').inTable('courses');
        table.text('name').notNullable();
        table.timestamp('date');
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('exams');
};
