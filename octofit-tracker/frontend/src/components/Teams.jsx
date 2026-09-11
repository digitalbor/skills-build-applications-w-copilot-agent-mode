import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'Focus' },
  { key: 'members', label: 'Members', format: (members) => members?.length || 0 },
]

export default function Teams() {
  return (
    <CollectionView
      title="Teams"
      description="Find your people and make progress together."
      endpoint="teams"
      columns={columns}
    />
  )
}
