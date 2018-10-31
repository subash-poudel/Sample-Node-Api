import Boom from 'boom';
import TimeSheet from '../models/timesheet';

/**
 * Get all timesheets.
 *
 * @return {Promise}
 */
export function getAllTimesheet() {
  return TimeSheet.fetchAll();
}

/**
 * Get a timesheet.
 *
 * @param  {Number}  id
 * @return {Promise}
 */
export function getTimesheet(id) {
  return new TimeSheet({ id }).fetch().then(timesheet => {
    if (!timesheet) {
      throw Boom.notFound('Timesheet not found');
    }

    return timesheet;
  });
}

/**
 * Create new timesheet.
 *
 * @param  {Object}  timesheet data
 * @return {Promise}
 */
export function createTimesheet(data) {
  return new TimeSheet(data).save();
}

/**
 * Update a timesheet.
 *
 * @param  {Number|String}  id
 * @param  {Object}         data
 * @return {Promise}
 */
export function updateTimesheet(id, data) {
  return new TimeSheet({ id }).save(data);
}

/**
 * Delete a timesheet.
 *
 * @param  {Number|String}  id
 * @return {Promise}
 */
export function deleteTimesheet(id) {
  const timesheet = new TimeSheet({ id }).fetch();
  timesheet.then(timesheet => timesheet.destroy());

  return timesheet;
}
