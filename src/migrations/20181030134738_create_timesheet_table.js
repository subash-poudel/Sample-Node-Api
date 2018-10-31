import { TIMESHEET_TABLE } from '../constants/tables';
import { TIMESHEET_STATUS_SAVED, TIMESHEET_STATUS_SUBMITTED } from '../constants/timesheetStatus';

export function up(knex, Promise) {
  return knex.schema.createTable(TIMESHEET_TABLE, table => {
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
    table.integer('timesheet_task_id');
    table.foreign('timesheet_task_id').references('timesheet_tasks.id');
    // enums
    table.enu('status', [TIMESHEET_STATUS_SAVED, TIMESHEET_STATUS_SUBMITTED]);
  });
}

export function down(knex, Promise) {
  return knex.schema.dropTable(TIMESHEET_TABLE);
}
