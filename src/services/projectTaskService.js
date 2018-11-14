import ProjectTasks from '../models/projectTasks';

/**
 * Fetch all project tasks.
 *
 * @return {Promise}
 */
export function fetchAll() {
  return ProjectTasks.fetchAll();
}
