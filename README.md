# 🚀 Employee Task Tracker

A modern, responsive Employee Task Tracker web application built with React, Vite, and TailwindCSS. Features a clean startup-style interface with sidebar navigation, dashboard analytics, and comprehensive task management capabilities.

![Task Tracker Preview](https://via.placeholder.com/800x400/3b82f6/ffffff?text=Employee+Task+Tracker+Dashboard)

## ✨ Features

### 🎯 Core Functionality
- **Dashboard Overview** - Real-time statistics with animated charts and progress indicators
- **Employee Management** - View team members with their roles and task assignments
- **Task Filtering** - Filter tasks by status (All, Pending, In Progress, Completed)
- **Add New Tasks** - Create and assign tasks via elegant modal interface
- **Local Storage Persistence** - All changes persist after page refresh

### 🎨 Modern UI/UX
- **Startup-Style Interface** - Clean, minimal design with professional aesthetics
- **Left Sidebar Navigation** - Dashboard, Employees, Filter sections
- **Top Navbar** - Search functionality and user profile
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Status Badges** - Color-coded task status indicators
- **Progress Charts** - SVG-based circular progress visualization

### 🏗️ Technical Features
- **Component Architecture** - Modular, reusable components
- **Custom Hooks** - localStorage persistence and state management
- **Utility Functions** - Task filtering and statistics calculations
- **Modern React Patterns** - Functional components with hooks
- **TailwindCSS** - Utility-first styling with custom design system

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **State Management**: React Hooks + Custom Hooks
- **Data Persistence**: localStorage API
- **Development**: ESLint, PostCSS, Autoprefixer

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd employee-task-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.jsx         # Button component with variants
│   │   ├── Card.jsx           # Card component with header/body/footer
│   │   ├── Badge.jsx          # Status badge component
│   │   └── Modal.jsx          # Modal component with animations
│   ├── layout/                # Layout components
│   │   ├── Navbar.jsx         # Top navigation bar
│   │   └── Sidebar.jsx        # Left sidebar navigation
│   ├── dashboard/             # Dashboard-specific components
│   │   ├── StatsCard.jsx      # Statistics card with trends
│   │   └── ProgressChart.jsx  # SVG progress chart
│   ├── employees/             # Employee-related components
│   │   └── EmployeeCard.jsx   # Employee card with tasks
│   └── tasks/                 # Task-related components
│       ├── TaskFilter.jsx     # Task filtering component
│       └── AddTaskModal.jsx   # Add task modal form
├── pages/                     # Page components
│   ├── Dashboard.jsx          # Dashboard page
│   ├── Employees.jsx          # Employees page
│   └── FilterTasks.jsx        # Filter tasks page
├── hooks/                     # Custom React hooks
│   └── useLocalStorage.js     # localStorage persistence hook
├── utils/                     # Utility functions
│   └── taskUtils.js           # Task filtering and calculations
├── data/                      # Mock data
│   └── employees.json         # Employee and task data
├── App.jsx                    # Main application component
├── main.jsx                   # Application entry point
└── index.css                  # Global styles and Tailwind imports
```

## 🎯 Key Components

### Dashboard
- **Real-time Statistics**: Total tasks, completion rates, status breakdown
- **Progress Chart**: SVG-based circular chart with animations
- **Team Overview**: Employee performance summary
- **Trend Indicators**: Week-over-week progress tracking

### Employee Management
- **Employee Cards**: Profile pictures, roles, and task assignments
- **Task Lists**: Color-coded status indicators and priority levels
- **Completion Rates**: Individual performance metrics
- **Search Functionality**: Find employees quickly

### Task Filtering
- **Status Filters**: All, Pending, In Progress, Completed
- **Quick Stats**: Filter-specific statistics
- **Visual Indicators**: Color-coded filter options
- **Clear Filters**: Easy reset functionality

### Add Task Modal
- **Form Validation**: Required field validation
- **Employee Assignment**: Dropdown selection
- **Status Selection**: Initial task status
- **Priority Levels**: Low, Medium, High priority options

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6) - Navigation and primary actions
- **Success**: Green (#22c55e) - Completed tasks and positive indicators
- **Warning**: Yellow (#f59e0b) - In progress tasks and warnings
- **Danger**: Red (#ef4444) - Pending tasks and errors
- **Gray Scale**: Various shades for text and backgrounds

### Typography
- **Font Family**: System fonts (Inter-style)
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Text Sizes**: Responsive scaling from xs to 3xl

### Animations
- **Fade In**: Page transitions and component mounting
- **Slide In**: Sidebar and modal animations
- **Bounce In**: Modal entrance effects
- **Hover Effects**: Button and card interactions

## 🧠 Data Management

### Mock Data Structure
```json
{
  "employees": [
    {
      "id": 1,
      "name": "Alice Johnson",
      "role": "Frontend Developer",
      "avatar": "https://...",
      "tasks": [
        {
          "id": 101,
          "title": "Build login page",
          "status": "Completed",
          "priority": "High"
        }
      ]
    }
  ]
}
```

### State Management
- **Local State**: React useState for component-specific state
- **Persistent State**: Custom useLocalStorage hook for data persistence
- **Derived State**: Computed values for statistics and filtered data

### Data Flow
1. Load initial data from JSON file
2. Check localStorage for existing data
3. Merge and persist changes automatically
4. Calculate statistics in real-time
5. Apply filters dynamically

## 🔧 Assumptions Made

1. **Task Assignment**: Each task belongs to exactly one employee
2. **Status Values**: Three predefined statuses (Pending, In Progress, Completed)
3. **Priority Levels**: Three priority levels (Low, Medium, High)
4. **User Roles**: Static employee roles that don't change
5. **Data Persistence**: Client-side only using localStorage
6. **Authentication**: No user login or permission system
7. **Real-time Updates**: No backend synchronization required

## 🚀 Future Enhancements

### Short-term Improvements
- Task editing and deletion functionality
- Drag-and-drop task status updates
- Advanced search and filtering options
- Task due dates and reminders
- Employee profile management

### Long-term Features
- Backend API integration
- Real-time collaboration
- Team chat and notifications
- Time tracking and reporting
- Mobile app development
- Advanced analytics dashboard

## 📱 Browser Compatibility

- **Chrome** (recommended) - Full feature support
- **Firefox** - Full feature support
- **Safari** - Full feature support
- **Edge** - Full feature support
- **Mobile Browsers** - Responsive design optimized

## 🧪 Testing

### Manual Testing Checklist
- [ ] Dashboard loads with correct statistics
- [ ] Employee cards display properly
- [ ] Task filtering works for all statuses
- [ ] Add task modal functions correctly
- [ ] Data persists after page refresh
- [ ] Responsive design on mobile devices
- [ ] Animations and transitions work smoothly

### Performance Considerations
- Optimized re-renders with proper key props
- Efficient filtering algorithms
- Lazy loading for large datasets
- Minimal bundle size with tree shaking

## 🤝 Contributing

This is a demonstration project. For production use, consider:

1. **Backend Integration**: REST API or GraphQL endpoints
2. **Authentication**: User login and role-based permissions
3. **Database**: Persistent data storage
4. **Testing**: Unit tests, integration tests, E2E tests
5. **CI/CD**: Automated deployment pipeline
6. **Monitoring**: Error tracking and performance monitoring

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## 📞 Support

For questions or issues, please refer to the documentation or create an issue in the repository.

---

**Built with ❤️ using React, Vite, and TailwindCSS**