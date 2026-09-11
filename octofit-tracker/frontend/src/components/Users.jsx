import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'profile', label: 'Profile' },
  { key: 'points', label: 'Points' },
]

const endpoint = import.meta.env.VITE_CODESPACE_NAME?.trim()
  ? `https://${import.meta.env.VITE_CODESPACE_NAME.trim()}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

export default function Users() {
  return (
    <CollectionView
      title="Users"
      description="The athletes powering your OctoFit community."
      endpoint={endpoint}
      columns={columns}
    />
  )
}
