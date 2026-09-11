import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'description', label: 'Description' },
]

export default function Workouts() {
  return (
    <CollectionView
      title="Workouts"
      description="Choose a session that matches today's energy."
      endpoint="workouts"
      columns={columns}
    />
  )
}
