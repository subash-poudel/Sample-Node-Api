import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as projectTaskService from '../services/projectTaskService';
import logger from '../utils/logger';
// import { findUser, userValidator } from '../validators/userValidator';

const router = Router();

/**
 * GET /api/projecttasks
 */
router.get('/', (req, res, next) => {
  logger.info('Project Task Controller fetch all tasks.');
  projectTaskService
    .fetchAll()
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;
