import React from 'react';
import { Filter } from 'lucide-react';
import TaskFilter from '../components/tasks/TaskFilter';
import TaskList from '../components/tasks/TaskList';
import Badge from '../components/ui/Badge';
import { calculateTaskStats, getAllTasks, filterTasksByStatus } from '../utils/taskUtils';

/**
 * Filter Tasks page component
 * @param {Object} props - component props
 * @param {Array} props.employees - list of employees
 * @param {string} props.statusFilter - current status filter
 * @param {function} props.onStatusFilterChange - status filter change handler
 */
const FilterTasks = ({ employees, statusFilter, onStatusFilterChange }) => {
  const stats = calculateTaskStats(employees);
  
  // Get all tasks and apply filter
  const allTasks = getAllTasks(employees);
  const filteredTasks = filterTasksByStatus(allTasks, statusFilter);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <Filter className="w-8 h-8 mr-3" />
          Filter Tasks
        </h1>
        <p className="text-gray-600">Filter and organize tasks by status and priority</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filter Sidebar */}
        <div className="lg:col-span-1">
          <TaskFilter
            statusFilter={statusFilter}
            onStatusFilterChange={onStatusFilterChange}
            stats={stats}
          />
        </div>

        {/* Tasks Display */}
        <div className="lg:col-span-3">
          {/* Current Filter Header */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {statusFilter === 'All' ? 'All Tasks' : `${statusFilter} Tasks`}
              </h3>
              <Badge variant="primary" size="md">
                {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'}
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-xl font-bold text-gray-900 mb-1">
                  {filteredTasks.length}
                </div>
                <div className="text-xs text-gray-500">Showing</div>
              </div>
              
              <div className="text-center p-3 bg-primary-50 rounded-lg">
                <div className="text-xl font-bold text-primary-600 mb-1">
                  {new Set(filteredTasks.map(t => t.employeeId)).size}
                </div>
                <div className="text-xs text-gray-500">Employees</div>
              </div>
              
              <div className="text-center p-3 bg-success-50 rounded-lg">
                <div className="text-xl font-bold text-success-600 mb-1">
                  {stats.completionPercentage}%
                </div>
                <div className="text-xs text-gray-500">Complete</div>
              </div>
              
              <div className="text-center p-3 bg-warning-50 rounded-lg">
                <div className="text-xl font-bold text-warning-600 mb-1">
                  {filteredTasks.filter(t => t.priority === 'High').length}
                </div>
                <div className="text-xs text-gray-500">High Priority</div>
              </div>
            </div>
          </div>

          {/* Tasks List */}
          <TaskList 
            tasks={filteredTasks} 
            statusFilter={statusFilter}
          />
        </div>
      </div>

      {/* Filter Tips */}
      {filteredTasks.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="text-sm font-semibold text-blue-900 mb-2">Filter Tips</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Use "All Tasks" to see the complete overview</li>
            <li>• Filter by "Pending" to see tasks that need to be started</li>
            <li>• Use "In Progress" to track active work</li>
            <li>• Filter by "Completed" to review finished tasks</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterTasks;