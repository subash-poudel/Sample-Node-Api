import { TIME_SHEET_STATUS_TABLE } from '../constants/tables';
import logger from '../utils/logger';

const statusList = ['Saved', 'Submitted'];

const createStatus = (knex, status) =>
  knex(TIME_SHEET_STATUS_TABLE).insert({
    status
  });

export function seed(knex, Promise) {
  logger.info(`Seed running = ${TIME_SHEET_STATUS_TABLE} list ${statusList}`);

  return knex(TIME_SHEET_STATUS_TABLE)
    .del()
    .then(() => {
      const statusPromises = [];
      statusList.forEach(statusName => {
        statusPromises.push(createStatus(knex, statusName));
      });

      return Promise.all(statusPromises);
    });
}

export default seed;
