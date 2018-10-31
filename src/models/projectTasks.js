import bookshelf from '../db';
import { TIME_SHEET_TASKS_TABLE } from '../constants/tables';

/**
 * ProjectTasks model.
 */
class ProjectTasks extends bookshelf.Model {
  get tableName() {
    return TIME_SHEET_TASKS_TABLE;
  }

  get hasTimestamps() {
    return true;
  }
}

export default ProjectTasks;
