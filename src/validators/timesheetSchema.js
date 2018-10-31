import Joi from 'joi';

const TIMESHEET_SCHEMA = {
  //  2018-10-31
  //  2018-1-1
  date: Joi.string()
    .label('Date')
    .max(10)
    .min(8)
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
  note: Joi.string()
    .label('Note')
    .required(),
  adjusted_note: Joi.string()
    .label('Adjusted Note')
    .allow(null),
  time_sheet_task_id: Joi.number()
    .positive()
    .required()
};

export default TIMESHEET_SCHEMA;
