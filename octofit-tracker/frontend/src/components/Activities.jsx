import { formatDate } from '../formatters.js'
import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'user', label: 'Athlete' },
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'points', label: 'Points' },
  { key: 'completedAt', label: 'Completed', format: formatDate },
]

export default function Activities() {
  return (
    <CollectionView
      title="Activities"
      description="Recent movement logged by your fitness community."
      endpoint="activities"
      columns={columns}
    />
  )
}
