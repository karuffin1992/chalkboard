exports.up = (knex, Promise) => {
    return knex.schema.createTable('user_courses', (table) => {
        table.increments();
        table.integer('user_id').unsigned().references('id').inTable('users');
        table.integer('course_id').unsigned().references('id').inTable('courses');
        table.timestamp('date_taken');
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('user_courses');
};
