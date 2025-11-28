import React, { useState } from 'react';
import { Plus, User, Flag } from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { generateTaskId } from '../../utils/taskUtils';

/**
 * Add task modal component
 * @param {Object} props - component props
 * @param {boolean} props.isOpen - modal open state
 * @param {function} props.onClose - close handler
 * @param {Array} props.employees - list of employees
 * @param {function} props.onAddTask - add task handler
 */
const AddTaskModal = ({ isOpen, onClose, employees, onAddTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    employeeId: '',
    status: 'Pending',
    priority: 'Medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.employeeId) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const newTask = {
        id: generateTaskId(),
        title: formData.title.trim(),
        status: formData.status,
        priority: formData.priority
      };

      await onAddTask(parseInt(formData.employeeId), newTask);
      
      // Reset form
      setFormData({
        title: '',
        employeeId: '',
        status: 'Pending',
        priority: 'Medium'
      });
      
      onClose();
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Failed to add task. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        title: '',
        employeeId: '',
        status: 'Pending',
        priority: 'Medium'
      });
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Add New Task"
      size="md"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Task Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Task Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter task title..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Employee Selection */}
        <div>
          <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-1" />
            Assign to Employee *
          </label>
          <select
            id="employeeId"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            required
            disabled={isSubmitting}
          >
            <option value="">Select an employee...</option>
            {employees.map(employee => (
              <option key={employee.id} value={employee.id}>
                {employee.name} - {employee.role}
              </option>
            ))}
          </select>
        </div>

        {/* Status and Priority Row */}
        <div className="grid grid-cols-2 gap-4">
          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              disabled={isSubmitting}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
              <Flag className="w-4 h-4 inline mr-1" />
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              disabled={isSubmitting}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
          <Button
            type="button"
            variant="secondary"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Adding...
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 mr-2" />
                Add Task
              </>
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;