import bookshelf from '../db';
import { TIMESHEET_TABLE } from '../constants/tables';
import ProjectTasks from './projectTasks';
/**
 * Timesheet model.
 */
class Timesheet extends bookshelf.Model {
  get tableName() {
    return TIMESHEET_TABLE;
  }

  get hasTimestamps() {
    return true;
  }

  // parse() {
  //   return '2018-11-11';
  // }

  // summary: function() {
  // return this.hasOne(Summary);
  // }

  get projectTask() {
    return this.hasOne(ProjectTasks);
  }
}

export default Timesheet;
