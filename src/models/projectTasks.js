import bookshelf from '../db';
import { TIMESHEET_TASKS_TABLE } from '../constants/tables';

/**
 * ProjectTasks model.
 */
class ProjectTasks extends bookshelf.Model {
  get tableName() {
    return TIMESHEET_TASKS_TABLE;
  }

  get hasTimestamps() {
    return true;
  }
}

export default ProjectTasks;
