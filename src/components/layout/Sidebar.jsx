import React from 'react';
import { BarChart3, Users, Filter, Plus, Settings, HelpCircle } from 'lucide-react';

/**
 * Left sidebar navigation component
 * @param {Object} props - component props
 * @param {string} props.activeView - currently active view
 * @param {function} props.onViewChange - view change handler
 * @param {function} props.onAddTask - add task handler
 */
const Sidebar = ({ activeView, onViewChange, onAddTask }) => {
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'employees', label: 'Employees', icon: Users },
    { id: 'filter', label: 'Filter Tasks', icon: Filter },
  ];

  const handleNavClick = (viewId) => {
    onViewChange(viewId);
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="flex flex-col h-full">
        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-50 text-primary-600 border-r-2 border-primary-600'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
          
          {/* Add Task Button */}
          <div className="pt-4">
            <button
              onClick={onAddTask}
              className="w-full flex items-center px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              <Plus className="w-5 h-5 mr-3" />
              <span className="font-medium">Add New Task</span>
            </button>
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="px-4 py-4 border-t border-gray-200">
          <div className="space-y-2">
            <button className="w-full flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-4 h-4 mr-3" />
              <span className="text-sm">Settings</span>
            </button>
            <button className="w-full flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <HelpCircle className="w-4 h-4 mr-3" />
              <span className="text-sm">Help</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;