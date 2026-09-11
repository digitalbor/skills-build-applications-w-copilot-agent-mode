import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'description', label: 'Description' },
]

const endpoint = import.meta.env.VITE_CODESPACE_NAME?.trim()
  ? `https://${import.meta.env.VITE_CODESPACE_NAME.trim()}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

export default function Workouts() {
  return (
    <CollectionView
      title="Workouts"
      description="Choose a session that matches today's energy."
      endpoint={endpoint}
      columns={columns}
    />
  )
}
