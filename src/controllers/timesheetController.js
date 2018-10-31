import HttpStatus from 'http-status-codes';
import * as timesheetService from '../services/timesheetService';
import logger from '../utils/logger';

const createTimeSheet = async (req, res, next) => {
  try {
    logger.info(`Timesheet Create API: ${JSON.stringify(req.body)}`);

    const data = {
      date: req.body.date,
      duration: req.body.duration,
      adjusted_duration: req.body.adjusted_duration,
      employee_id: req.body.employee_id,
      project_id: req.body.project_id,
      note: req.body.note,
      adjusted_note: req.body.adjusted_note,
      time_sheet_task_id: req.body.time_sheet_task_id,
      time_sheet_status_id: req.body.time_sheet_status_id
    };

    const tasks = await timesheetService.createTimeSheet(data);
    res.status(HttpStatus.OK).json(tasks);
  } catch (error) {
    next(error);
  }
};

export { createTimeSheet };
