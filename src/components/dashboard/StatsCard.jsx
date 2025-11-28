import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import Card from '../ui/Card';

/**
 * Statistics card component for dashboard
 * @param {Object} props - component props
 * @param {string} props.title - card title
 * @param {number} props.value - main value to display
 * @param {string} props.subtitle - subtitle text
 * @param {string} props.color - color theme ('blue', 'green', 'yellow', 'red')
 * @param {React.ReactNode} props.icon - icon component
 * @param {number} props.trend - trend percentage (optional)
 */
const StatsCard = ({ 
  title, 
  value, 
  subtitle, 
  color = 'blue', 
  icon, 
  trend,
  className = ''
}) => {
  const colorClasses = {
    blue: 'border-l-primary-500 bg-primary-50',
    green: 'border-l-success-500 bg-success-50',
    yellow: 'border-l-warning-500 bg-warning-50',
    red: 'border-l-danger-500 bg-danger-50'
  };

  const iconColorClasses = {
    blue: 'text-primary-600',
    green: 'text-success-600',
    yellow: 'text-warning-600',
    red: 'text-danger-600'
  };

  return (
    <Card className={`border-l-4 ${colorClasses[color]} ${className} animate-fade-in`}>
      <Card.Body className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
            {subtitle && (
              <p className="text-sm text-gray-500">{subtitle}</p>
            )}
            
            {/* Trend Indicator */}
            {trend !== undefined && (
              <div className="flex items-center mt-2">
                {trend >= 0 ? (
                  <TrendingUp className="w-4 h-4 text-success-600 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-danger-600 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  trend >= 0 ? 'text-success-600' : 'text-danger-600'
                }`}>
                  {Math.abs(trend)}%
                </span>
                <span className="text-sm text-gray-500 ml-1">vs last week</span>
              </div>
            )}
          </div>
          
          {/* Icon */}
          {icon && (
            <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
              <div className={`w-6 h-6 ${iconColorClasses[color]}`}>
                {icon}
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StatsCard;