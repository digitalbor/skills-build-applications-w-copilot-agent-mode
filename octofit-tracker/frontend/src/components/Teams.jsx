import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'Focus' },
  { key: 'members', label: 'Members', format: (members) => members?.length || 0 },
]

const endpoint = import.meta.env.VITE_CODESPACE_NAME?.trim()
  ? `https://${import.meta.env.VITE_CODESPACE_NAME.trim()}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

export default function Teams() {
  return (
    <CollectionView
      title="Teams"
      description="Find your people and make progress together."
      endpoint={endpoint}
      columns={columns}
    />
  )
}
