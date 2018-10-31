import validate from '../utils/validate';
import TIMESHEET_SCHEMA from './timesheetSchema';
import * as timesheetService from '../services/timesheetService';

/**
 * Validate timesheet existence.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function findTimesheet(req, res, next) {
  return timesheetService
    .fetchTimesheet(req.params.id)
    .then(() => next())
    .catch(err => next(err));
}

/**
 * Validate create/update timesheet request.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function timesheetValidator(req, res, next) {
  return validate(req.body, TIMESHEET_SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}

export { findTimesheet, timesheetValidator };
