import { formatDate } from '../formatters.js'
import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'user', label: 'Athlete' },
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'points', label: 'Points' },
  { key: 'completedAt', label: 'Completed', format: formatDate },
]

const endpoint = import.meta.env.VITE_CODESPACE_NAME?.trim()
  ? `https://${import.meta.env.VITE_CODESPACE_NAME.trim()}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

export default function Activities() {
  return (
    <CollectionView
      title="Activities"
      description="Recent movement logged by your fitness community."
      endpoint={endpoint}
      columns={columns}
    />
  )
}
