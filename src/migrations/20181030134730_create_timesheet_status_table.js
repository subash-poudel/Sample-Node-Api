import { TIME_SHEET_STATUS_TABLE } from '../constants/tables';

export function up(knex, Promise) {
  return knex.schema.createTable(TIME_SHEET_STATUS_TABLE, table => {
    table.increments();
    table.string('status').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export function down(knex, Promise) {
  return knex.schema.dropTable(TIME_SHEET_STATUS_TABLE);
}
