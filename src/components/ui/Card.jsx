import React from 'react';

/**
 * Reusable Card component
 * @param {Object} props - component props
 * @param {React.ReactNode} props.children - card content
 * @param {string} props.className - additional CSS classes
 * @param {boolean} props.hover - enable hover effects
 */
const Card = ({ children, className = '', hover = true, ...props }) => {
  const baseClasses = 'bg-white rounded-xl shadow-sm border border-gray-100';
  const hoverClasses = hover ? 'hover:shadow-md transition-shadow duration-200' : '';
  const cardClasses = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

/**
 * Card Header component
 */
const CardHeader = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-gray-100 ${className}`}>
    {children}
  </div>
);

/**
 * Card Body component
 */
const CardBody = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

/**
 * Card Footer component
 */
const CardFooter = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;