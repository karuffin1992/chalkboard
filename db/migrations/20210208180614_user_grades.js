exports.up = (knex, Promise) => {
    return knex.schema.createTable('user_grades', (table) => {
        table.increments();
        table.integer('user_id').unsigned().references('id').inTable('users');
        table.integer('exam_id').unsigned().references('id').inTable('exams');
        table.decimal('exam_grade');
    })
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('user_grades');
};
