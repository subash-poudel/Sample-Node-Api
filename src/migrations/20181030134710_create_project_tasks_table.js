import { TIME_SHEET_TASKS_TABLE } from '../constants/tables';

export function up(knex, Promise) {
  return knex.schema.createTable(TIME_SHEET_TASKS_TABLE, table => {
    table.increments();
    table.string('name').notNullable();
    table.string('description');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export function down(knex, Promise) {
  return knex.schema.dropTable(TIME_SHEET_TASKS_TABLE);
}