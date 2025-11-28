import React from 'react';
import { Calendar, User, Flag, Clock } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

/**
 * Task list component to display filtered tasks
 * @param {Object} props - component props
 * @param {Array} props.tasks - list of tasks to display
 * @param {string} props.statusFilter - current status filter
 */
const TaskList = ({ tasks, statusFilter }) => {
  if (tasks.length === 0) {
    return (
      <Card className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <Calendar className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
        <p className="text-gray-500">
          {statusFilter === 'All' 
            ? 'No tasks have been created yet.' 
            : `No ${statusFilter.toLowerCase()} tasks found.`}
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id} className="hover:shadow-lg transition-all duration-200">
          <Card.Body className="p-6">
            <div className="flex items-start justify-between">
              {/* Task Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                  <Badge 
                    variant={task.status.toLowerCase().replace(' ', '-')}
                    size="sm"
                  >
                    {task.status}
                  </Badge>
                </div>
                
                {/* Employee Info */}
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span className="font-medium">{task.employeeName}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400">•</span>
                    <span className="ml-1">{task.employeeRole}</span>
                  </div>
                </div>

                {/* Priority */}
                {task.priority && (
                  <div className="flex items-center text-sm">
                    <Flag className="w-4 h-4 mr-1 text-gray-400" />
                    <span className={`font-medium ${
                      task.priority === 'High' ? 'text-danger-600' :
                      task.priority === 'Medium' ? 'text-warning-600' :
                      'text-gray-600'
                    }`}>
                      {task.priority} Priority
                    </span>
                  </div>
                )}
              </div>

              {/* Task ID */}
              <div className="text-right">
                <div className="text-xs text-gray-400 mb-1">Task ID</div>
                <div className="text-sm font-mono text-gray-600">#{task.id}</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;