import React from 'react';
import Card from '../ui/Card';

/**
 * Simple SVG progress chart component
 * @param {Object} props - component props
 * @param {Object} props.data - chart data with completed, inProgress, pending counts
 * @param {number} props.total - total number of tasks
 */
const ProgressChart = ({ data, total }) => {
  const { completed, inProgress, pending } = data;
  
  // Calculate percentages
  const completedPercentage = total > 0 ? (completed / total) * 100 : 0;
  const inProgressPercentage = total > 0 ? (inProgress / total) * 100 : 0;
  const pendingPercentage = total > 0 ? (pending / total) * 100 : 0;

  // SVG circle properties
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate stroke dash arrays for each segment
  const completedStroke = (completedPercentage / 100) * circumference;
  const inProgressStroke = (inProgressPercentage / 100) * circumference;
  const pendingStroke = (pendingPercentage / 100) * circumference;

  return (
    <Card className="animate-fade-in">
      <Card.Header>
        <h3 className="text-lg font-semibold text-gray-900">Task Progress</h3>
      </Card.Header>
      <Card.Body className="p-6">
        <div className="flex items-center justify-between">
          {/* SVG Chart */}
          <div className="relative">
            <svg width="120" height="120" className="transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#f3f4f6"
                strokeWidth="8"
                fill="transparent"
              />
              
              {/* Completed segment */}
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#22c55e"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${completedStroke} ${circumference}`}
                strokeDashoffset="0"
                className="transition-all duration-1000 ease-out"
              />
              
              {/* In Progress segment */}
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#f59e0b"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${inProgressStroke} ${circumference}`}
                strokeDashoffset={-completedStroke}
                className="transition-all duration-1000 ease-out"
              />
              
              {/* Pending segment */}
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#ef4444"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${pendingStroke} ${circumference}`}
                strokeDashoffset={-(completedStroke + inProgressStroke)}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            
            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{total}</div>
                <div className="text-sm text-gray-500">Total</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-success-500 rounded-full mr-3"></div>
              <div>
                <div className="text-sm font-medium text-gray-900">{completed}</div>
                <div className="text-xs text-gray-500">Completed</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-3 h-3 bg-warning-500 rounded-full mr-3"></div>
              <div>
                <div className="text-sm font-medium text-gray-900">{inProgress}</div>
                <div className="text-xs text-gray-500">In Progress</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-3 h-3 bg-danger-500 rounded-full mr-3"></div>
              <div>
                <div className="text-sm font-medium text-gray-900">{pending}</div>
                <div className="text-xs text-gray-500">Pending</div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProgressChart;