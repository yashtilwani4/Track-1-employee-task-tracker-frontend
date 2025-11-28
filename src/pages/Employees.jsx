import React from 'react';
import { Users, Search } from 'lucide-react';
import EmployeeCard from '../components/employees/EmployeeCard';

/**
 * Employees page component
 * @param {Object} props - component props
 * @param {Array} props.employees - list of employees
 * @param {Array} props.filteredTasks - filtered tasks
 */
const Employees = ({ employees, filteredTasks }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <Users className="w-8 h-8 mr-3" />
            Employees
          </h1>
          <p className="text-gray-600">Manage team members and their assigned tasks</p>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search employees..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
          />
        </div>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">{employees.length}</div>
          <div className="text-sm text-gray-500">Total Employees</div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-primary-600">
            {employees.reduce((acc, emp) => acc + emp.tasks.length, 0)}
          </div>
          <div className="text-sm text-gray-500">Total Tasks Assigned</div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-success-600">
            {Math.round(
              employees.reduce((acc, emp) => {
                const completed = emp.tasks.filter(t => t.status === 'Completed').length;
                const total = emp.tasks.length;
                return acc + (total > 0 ? (completed / total) * 100 : 0);
              }, 0) / employees.length
            )}%
          </div>
          <div className="text-sm text-gray-500">Avg. Completion Rate</div>
        </div>
      </div>

      {/* Employees Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            filteredTasks={filteredTasks}
          />
        ))}
      </div>

      {/* Empty State */}
      {employees.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No employees found</h3>
          <p className="text-gray-500">Get started by adding your first team member.</p>
        </div>
      )}
    </div>
  );
};

export default Employees;