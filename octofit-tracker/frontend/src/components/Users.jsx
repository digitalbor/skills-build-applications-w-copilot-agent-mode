import CollectionView from './CollectionView.jsx'

const columns = [
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'profile', label: 'Profile' },
  { key: 'points', label: 'Points' },
]

export default function Users() {
  return (
    <CollectionView
      title="Users"
      description="The athletes powering your OctoFit community."
      endpoint="users"
      columns={columns}
    />
  )
}
