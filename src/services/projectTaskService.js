import ProjectTasks from '../models/projectTasks';

/**
 * Get all project tasks.
 *
 * @return {Promise}
 */
export function getAllProjectTasks() {
  return ProjectTasks.fetchAll();
}
