import React from 'react';
import { User, Calendar, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { getStatusColorClass } from '../../utils/taskUtils';

/**
 * Employee card component displaying employee info and tasks
 * @param {Object} props - component props
 * @param {Object} props.employee - employee data
 * @param {Array} props.filteredTasks - filtered tasks for this employee
 */
const EmployeeCard = ({ employee, filteredTasks }) => {
  const employeeTasks = filteredTasks.filter(task => 
    employee.tasks.some(empTask => empTask.id === task.id)
  );

  const completedTasks = employeeTasks.filter(task => task.status === 'Completed').length;
  const totalTasks = employeeTasks.length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <Card className="animate-fade-in hover:shadow-lg transition-all duration-300">
      {/* Employee Header */}
      <Card.Header className="bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="flex items-center space-x-4">
          {/* Avatar */}
          <div className="relative">
            <img
              src={employee.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(employee.name)}&background=3b82f6&color=fff`}
              alt={employee.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success-500 rounded-full border-2 border-white"></div>
          </div>
          
          {/* Employee Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{employee.name}</h3>
            <p className="text-sm text-gray-600 flex items-center">
              <User className="w-4 h-4 mr-1" />
              {employee.role}
            </p>
          </div>
          
          {/* Completion Rate */}
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-600">{completionRate}%</div>
            <div className="text-xs text-gray-500">Complete</div>
          </div>
        </div>
      </Card.Header>

      {/* Tasks Section */}
      <Card.Body>
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-900 flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Tasks ({employeeTasks.length})
          </h4>
          {completedTasks > 0 && (
            <Badge variant="completed" size="sm">
              <CheckCircle className="w-3 h-3 mr-1" />
              {completedTasks} Done
            </Badge>
          )}
        </div>

        {/* Tasks List */}
        <div className="space-y-3">
          {employeeTasks.length > 0 ? (
            employeeTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    {task.title}
                  </p>
                  {task.priority && (
                    <p className="text-xs text-gray-500">
                      Priority: {task.priority}
                    </p>
                  )}
                </div>
                
                <Badge 
                  variant={task.status.toLowerCase().replace(' ', '-')}
                  size="sm"
                >
                  {task.status}
                </Badge>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">No tasks match the current filter</p>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default EmployeeCard;