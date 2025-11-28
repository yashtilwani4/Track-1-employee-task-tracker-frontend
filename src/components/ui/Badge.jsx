import React from 'react';

/**
 * Reusable Badge component for status indicators
 * @param {Object} props - component props
 * @param {string} props.variant - badge variant ('pending', 'in-progress', 'completed', 'default')
 * @param {string} props.size - badge size ('sm', 'md', 'lg')
 * @param {React.ReactNode} props.children - badge content
 * @param {string} props.className - additional CSS classes
 */
const Badge = ({ 
  variant = 'default', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';
  
  const variantClasses = {
    pending: 'bg-danger-100 text-danger-600',
    'in-progress': 'bg-warning-100 text-warning-600',
    completed: 'bg-success-100 text-success-600',
    default: 'bg-gray-100 text-gray-600',
    primary: 'bg-primary-100 text-primary-600'
  };
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm'
  };
  
  const badgeClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};

export default Badge;