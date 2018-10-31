import bookshelf from '../db';
import { TIME_SHEET_TABLE } from '../constants/tables';
import ProjectTasks from './projectTasks';
/**
 * Timesheet model.
 */
class Timesheet extends bookshelf.Model {
  get tableName() {
    return TIME_SHEET_TABLE;
  }

  get hasTimestamps() {
    return true;
  }

  // summary: function() {
  // return this.hasOne(Summary);
  // }

  get projectTask() {
    return this.hasOne(ProjectTasks);
  }
}

export default Timesheet;
