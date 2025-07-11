import { Routes, Route, Link } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import AddTaskPage from './pages/AddTaskPage'
import TaskDetailPage from './pages/TaskDetailPage'

const App = () => {
  return (
    <div className="p-4">
      <nav className="mb-6 space-x-4">
        <Link to="/" className="text-blue-600">Dashboard</Link>
        <Link to="/add-task" className="text-blue-600">Add Task</Link>
      </nav>

      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/task/:id" element={<TaskDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
