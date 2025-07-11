import { useParams } from 'react-router-dom'

const TaskDetailPage = () => {
  const { id } = useParams()
  return <div className="text-xl font-semibold">🔍 Task Details for ID: {id}</div>
}
export default TaskDetailPage
