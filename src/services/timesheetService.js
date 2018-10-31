import TimeSheet from '../models/timesheet';
import logger from '../utils/logger';

async function fetchAll() {
  try {
    const timesheet = await TimeSheet.fetchAll();

    return timesheet.serialize();
  } catch (error) {
    logger.error('Task Service ', error);
    throw error;
  }
}

async function createTimeSheet(timesheet) {
  try {
    console.log(`timesheet service ${JSON.stringify(timesheet)}`);
    const createdTimesheet = await new TimeSheet(timesheet).save();

    return createdTimesheet.serialize();
  } catch (error) {
    logger.error('Create TimeSheet Service ', error);
    throw error;
  }
}

export { fetchAll, createTimeSheet };
