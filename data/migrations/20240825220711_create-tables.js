exports.up = function (knex) {
  return knex.schema
    .createTable('projects', (tbl) => {
      tbl.increments('project_id');
      tbl.text('project_name', 128).notNullable();
      tbl.text('project_description', 256);
      tbl.boolean('project_completed').defaultTo(0);
    })
    .createTable('resources', (tbl) => {
      tbl.increments('resource_id');
      tbl.text('resource_name', 128).unique().notNullable();
      tbl.text('resource_description', 256);
    })
    .createTable('tasks', (tbl) => {
      tbl.increments('task_id');
      tbl.text('task_description', 256).notNullable();
      tbl.text('task_notes', 256);
      tbl.boolean('task_completed').defaultTo(0);
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks');
};
