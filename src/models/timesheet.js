import bookshelf from '../db';
import { TIME_SHEET_TABLE } from '../constants/tables';

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
}

export default Timesheet;
