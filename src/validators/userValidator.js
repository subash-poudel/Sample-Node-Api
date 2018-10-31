import Joi from 'joi';
import validate from '../utils/validate';
import TIMESHEET_SCHEMA from './timesheetSchema';
import * as userService from '../services/userService';
import * as timesheetService from '../services/timesheetService';

const SCHEMA = {
  name: Joi.string()
    .label('Name')
    .max(90)
    .required()
};

/**
 * Validate create/update user request.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function userValidator(req, res, next) {
  return validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}

/**
 * Validate users existence.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function findUser(req, res, next) {
  return userService
    .getUser(req.params.id)
    .then(() => next())
    .catch(err => next(err));
}

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
    .getTimesheet(req.params.id)
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

export { findUser, userValidator, findTimesheet, timesheetValidator };
