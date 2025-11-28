import React from 'react';
import { Filter, X } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

/**
 * Task filter component
 * @param {Object} props - component props
 * @param {string} props.statusFilter - current status filter
 * @param {function} props.onStatusFilterChange - status filter change handler
 * @param {Object} props.stats - task statistics
 */
const TaskFilter = ({ statusFilter, onStatusFilterChange, stats }) => {
  const filterOptions = [
    { value: 'All', label: 'All Tasks', count: stats.total, color: 'primary' },
    { value: 'Pending', label: 'Pending', count: stats.pending, color: 'pending' },
    { value: 'In Progress', label: 'In Progress', count: stats.inProgress, color: 'in-progress' },
    { value: 'Completed', label: 'Completed', count: stats.completed, color: 'completed' }
  ];

  return (
    <Card className="animate-fade-in">
      <Card.Header>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filter Tasks
          </h3>
          {statusFilter !== 'All' && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onStatusFilterChange('All')}
            >
              <X className="w-4 h-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </Card.Header>
      
      <Card.Body>
        <div className="space-y-3">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onStatusFilterChange(option.value)}
              className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all duration-200 ${
                statusFilter === option.value
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  option.color === 'primary' ? 'bg-primary-500' :
                  option.color === 'pending' ? 'bg-danger-500' :
                  option.color === 'in-progress' ? 'bg-warning-500' :
                  'bg-success-500'
                }`}></div>
                <span className={`font-medium ${
                  statusFilter === option.value ? 'text-primary-700' : 'text-gray-700'
                }`}>
                  {option.label}
                </span>
              </div>
              
              <Badge 
                variant={option.color === 'primary' ? 'default' : option.color}
                size="sm"
              >
                {option.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Quick Stats</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Completion Rate</span>
              <span className="font-medium text-gray-900">{stats.completionPercentage}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Active Tasks</span>
              <span className="font-medium text-gray-900">{stats.pending + stats.inProgress}</span>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskFilter;