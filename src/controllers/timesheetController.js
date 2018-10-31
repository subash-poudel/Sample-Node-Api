import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as timesheetService from '../services/timesheetService';
import { findTimesheet, timesheetValidator } from '../validators/timesheetValidator';
import logger from '../utils/logger';

const router = Router();

/**
 * GET /api/timesheet
 */
router.get('/', (req, res, next) => {
  timesheetService
    .fetchAllTimesheet()
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

/**
 * GET /api/timesheet/:id
 */
router.get('/:id', findTimesheet, (req, res, next) => {
  timesheetService
    .fetchTimesheet(req.params.id)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

/**
 * POST /api/timesheet
 */
router.post('/', timesheetValidator, (req, res, next) => {
  timesheetService
    .createTimesheet(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => next(err));
});

/**
 * PUT /api/timesheet/:id
 */
router.put('/:id', findTimesheet, timesheetValidator, (req, res, next) => {
  logger.info('Timesheet put request ' + req.body);
  timesheetService
    .updateTimesheet(req.params.id, req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

/**
 * DELETE /api/timesheet/:id
 */
router.delete('/:id', findTimesheet, (req, res, next) => {
  timesheetService
    .deleteTimesheet(req.params.id)
    .then(data => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch(err => next(err));
});

export default router;
