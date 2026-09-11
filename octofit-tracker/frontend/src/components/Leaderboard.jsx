import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'user', label: 'Athlete' },
  { key: 'points', label: 'Points' },
]

const endpoint = import.meta.env.VITE_CODESPACE_NAME?.trim()
  ? `https://${import.meta.env.VITE_CODESPACE_NAME.trim()}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

export default function Leaderboard() {
  return (
    <CollectionView
      title="Leaderboard"
      description="See who is setting the pace this season."
      endpoint={endpoint}
      columns={columns}
    />
  )
}
