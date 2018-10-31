import { TIME_SHEET_TABLE } from '../constants/tables';

export function up(knex, Promise) {
  return knex.schema.createTable(TIME_SHEET_TABLE, table => {
    table.increments();
    table.datetime('date').defaultTo(knex.fn.now());
    table.integer('duration').defaultTo(0);
    table.integer('adjusted_duration').defaultTo(0);
    table.integer('employee_id').notNullable();
    table.integer('project_id').notNullable();
    table.text('note');
    table.text('adjusted_note');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    // foreign keys
    table.integer('time_sheet_task_id');
    table.foreign('time_sheet_task_id').references('timesheet_tasks.id');

    table.integer('time_sheet_status_id');
    table.foreign('time_sheet_status_id').references('timesheet_status.id');
  });
}

export function down(knex, Promise) {
  return knex.schema.dropTable(TIME_SHEET_TABLE);
}
