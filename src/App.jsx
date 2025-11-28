import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import FilterTasks from './pages/FilterTasks';
import AddTaskModal from './components/tasks/AddTaskModal';
import { useLocalStorage } from './hooks/useLocalStorage';
import { filterTasksByStatus, getAllTasks } from './utils/taskUtils';
import employeesData from './data/employees.json';

/**
 * Main App component
 */
function App() {
  // State management
  const [employees, setEmployees] = useLocalStorage('employees', employeesData.employees);
  const [activeView, setActiveView] = useState('dashboard');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  // Get all tasks and apply filters
  const allTasks = getAllTasks(employees);
  const filteredTasks = filterTasksByStatus(allTasks, statusFilter);

  /**
   * Handle adding a new task to an employee
   * @param {number} employeeId - ID of the employee to assign task to
   * @param {Object} newTask - new task object
   */
  const handleAddTask = (employeeId, newTask) => {
    setEmployees(prevEmployees =>
      prevEmployees.map(emp =>
        emp.id === employeeId
          ? { ...emp, tasks: [...emp.tasks, newTask] }
          : emp
      )
    );
  };

  /**
   * Handle view change from sidebar
   * @param {string} viewId - ID of the view to switch to
   */
  const handleViewChange = (viewId) => {
    setActiveView(viewId);
  };

  /**
   * Handle opening add task modal
   */
  const handleAddTaskClick = () => {
    setIsAddTaskModalOpen(true);
  };

  /**
   * Handle status filter change
   * @param {string} status - new status filter
   */
  const handleStatusFilterChange = (status) => {
    setStatusFilter(status);
  };

  /**
   * Render the current active page
   */
  const renderActivePage = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard employees={employees} />;
      case 'employees':
        return (
          <Employees 
            employees={employees} 
            filteredTasks={filteredTasks}
          />
        );
      case 'filter':
        return (
          <FilterTasks
            employees={employees}
            statusFilter={statusFilter}
            onStatusFilterChange={handleStatusFilterChange}
          />
        );
      default:
        return <Dashboard employees={employees} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <Navbar />
      
      <div className="flex">
        {/* Left Sidebar */}
        <Sidebar
          activeView={activeView}
          onViewChange={handleViewChange}
          onAddTask={handleAddTaskClick}
        />
        
        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {renderActivePage()}
          </div>
        </main>
      </div>

      {/* Add Task Modal */}
      <AddTaskModal
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        employees={employees}
        onAddTask={handleAddTask}
      />
    </div>
  );
}

export default App;