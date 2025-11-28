import React from 'react';
import { BarChart3, Users, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import StatsCard from '../components/dashboard/StatsCard';
import ProgressChart from '../components/dashboard/ProgressChart';
import { calculateTaskStats } from '../utils/taskUtils';

/**
 * Dashboard page component
 * @param {Object} props - component props
 * @param {Array} props.employees - list of employees
 */
const Dashboard = ({ employees }) => {
  const stats = calculateTaskStats(employees);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Overview of team performance and task progress</p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Tasks"
          value={stats.total}
          subtitle="All assigned tasks"
          color="blue"
          icon={<BarChart3 className="w-6 h-6" />}
          trend={12}
        />
        
        <StatsCard
          title="Completed"
          value={stats.completed}
          subtitle={`${stats.completionPercentage}% completion rate`}
          color="green"
          icon={<CheckCircle className="w-6 h-6" />}
          trend={8}
        />
        
        <StatsCard
          title="In Progress"
          value={stats.inProgress}
          subtitle="Currently active"
          color="yellow"
          icon={<Clock className="w-6 h-6" />}
          trend={-3}
        />
        
        <StatsCard
          title="Pending"
          value={stats.pending}
          subtitle="Awaiting start"
          color="red"
          icon={<TrendingUp className="w-6 h-6" />}
          trend={-15}
        />
      </div>

      {/* Charts and Additional Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Chart */}
        <div className="lg:col-span-1">
          <ProgressChart 
            data={{
              completed: stats.completed,
              inProgress: stats.inProgress,
              pending: stats.pending
            }}
            total={stats.total}
          />
        </div>

        {/* Team Overview */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Team Overview
            </h3>
            
            <div className="space-y-4">
              {employees.map((employee) => {
                const employeeStats = calculateTaskStats([employee]);
                return (
                  <div key={employee.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <img
                        src={employee.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(employee.name)}&background=3b82f6&color=fff`}
                        alt={employee.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{employee.name}</p>
                        <p className="text-sm text-gray-500">{employee.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">{employeeStats.total}</div>
                        <div className="text-gray-500">Tasks</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-success-600">{employeeStats.completed}</div>
                        <div className="text-gray-500">Done</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-primary-600">{employeeStats.completionPercentage}%</div>
                        <div className="text-gray-500">Rate</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;