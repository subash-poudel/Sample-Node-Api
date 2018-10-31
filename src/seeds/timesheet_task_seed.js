import { TIMESHEET_TASKS_TABLE } from '../constants/tables';
import logger from '../utils/logger';

const taskList = [
  'Coding',
  'Design',
  'QA',
  'Meeting',
  'Training',
  'Others',
  'DevOps',
  'Project Management',
  'Research'
];

const createTask = (knex, name) =>
  knex(TIMESHEET_TASKS_TABLE).insert({
    name
  });

export function seed(knex, Promise) {
  logger.info(`Seed running = ${TIMESHEET_TASKS_TABLE} list ${taskList}`);

  return knex(TIMESHEET_TASKS_TABLE)
    .del()
    .then(() => {
      const taskPromises = [];
      taskList.forEach(taskName => {
        taskPromises.push(createTask(knex, taskName));
      });

      return Promise.all(taskPromises);
    });
}

export default seed;
