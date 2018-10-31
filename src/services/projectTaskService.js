import ProjectTasks from '../models/projectTasks';

/**
 * Get all project tasks.
 *
 * @return {Promise}
 */
export function fetchAll() {
  return ProjectTasks.fetchAll();
}
