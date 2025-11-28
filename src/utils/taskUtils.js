/**
 * Utility functions for task management and calculations
 */

/**
 * Filter tasks by status
 * @param {Array} tasks - array of tasks
 * @param {string} status - status to filter by ('All', 'Pending', 'In Progress', 'Completed')
 * @returns {Array} filtered tasks
 */
export const filterTasksByStatus = (tasks, status) => {
  if (status === 'All') return tasks;
  return tasks.filter(task => task.status === status);
};

/**
 * Calculate task statistics
 * @param {Array} employees - array of employees with tasks
 * @returns {Object} statistics object
 */
export const calculateTaskStats = (employees) => {
  const allTasks = employees.flatMap(emp => emp.tasks);
  const totalTasks = allTasks.length;
  const completedTasks = allTasks.filter(task => task.status === 'Completed').length;
  const inProgressTasks = allTasks.filter(task => task.status === 'In Progress').length;
  const pendingTasks = allTasks.filter(task => task.status === 'Pending').length;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return {
    total: totalTasks,
    completed: completedTasks,
    inProgress: inProgressTasks,
    pending: pendingTasks,
    completionPercentage
  };
};

/**
 * Get all tasks from employees array
 * @param {Array} employees - array of employees
 * @returns {Array} all tasks with employee info
 */
export const getAllTasks = (employees) => {
  return employees.flatMap(emp => 
    emp.tasks.map(task => ({
      ...task,
      employeeId: emp.id,
      employeeName: emp.name,
      employeeRole: emp.role
    }))
  );
};

/**
 * Generate unique task ID
 * @returns {number} unique ID based on timestamp
 */
export const generateTaskId = () => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

/**
 * Get status color class
 * @param {string} status - task status
 * @returns {string} CSS class name
 */
export const getStatusColorClass = (status) => {
  const statusMap = {
    'Pending': 'status-pending',
    'In Progress': 'status-in-progress',
    'Completed': 'status-completed'
  };
  return statusMap[status] || 'status-pending';
};