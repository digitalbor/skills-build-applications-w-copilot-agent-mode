import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'user', label: 'Athlete' },
  { key: 'points', label: 'Points' },
]

export default function Leaderboard() {
  return (
    <CollectionView
      title="Leaderboard"
      description="See who is setting the pace this season."
      endpoint="leaderboard"
      columns={columns}
    />
  )
}
