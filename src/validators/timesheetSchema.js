import Joi from 'joi';
import { TIMESHEET_STATUS_SAVED, TIMESHEET_STATUS_SUBMITTED } from '../constants/timesheetStatus';

const TIMESHEET_POST_SCHEMA = {
  //  2018-10-31
  //  2018-1-1
  date: Joi.date()
    .label('Date')
    .required(),
  duration: Joi.number()
    .label('Duration')
    .positive()
    .required(),
  adjusted_duration: Joi.number()
    .label('Adjusted Duration')
    .allow(null)
    .max(10),
  employee_id: Joi.number()
    .label('Employee Id')
    .positive()
    .required(),
  project_id: Joi.number()
    .label('Project Id')
    .positive()
    .required(),
  status: Joi.string()
    .label('TimeSheet Status')
    .valid([TIMESHEET_STATUS_SAVED, TIMESHEET_STATUS_SUBMITTED])
    .required(),
  note: Joi.string()
    .label('Note')
    .required(),
  adjusted_note: Joi.string()
    .label('Adjusted Note')
    .allow(null),
  timesheet_task_id: Joi.number()
    .positive()
    .required()
};

export { TIMESHEET_POST_SCHEMA };
