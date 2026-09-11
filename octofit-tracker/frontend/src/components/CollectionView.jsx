import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function displayValue(value) {
  if (value === null || value === undefined || value === '') return '-'
  if (Array.isArray(value)) return value.length ? value.join(', ') : '-'
  if (typeof value === 'object') {
    return value.username || value.name || value.title || value._id || '-'
  }
  return String(value)
}

export default function CollectionView({ title, description, endpoint, columns }) {
  const [records, setRecords] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isCurrent = true

    fetchCollection(endpoint)
      .then((items) => {
        if (isCurrent) setRecords(items)
      })
      .catch((requestError) => {
        if (isCurrent) setError(requestError.message)
      })
      .finally(() => {
        if (isCurrent) setIsLoading(false)
      })

    return () => {
      isCurrent = false
    }
  }, [endpoint])

  
  return (
    <section className="resource-page">
      <div className="resource-heading">
        <div>
          <p className="eyebrow">OctoFit data</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>

      {isLoading && <p className="status-message" role="status">Loading {title.toLowerCase()}...</p>}
      {!isLoading && error && <p className="status-message error" role="alert">{error}</p>}
      {!isLoading && !error && records.length === 0 && (
        <p className="status-message">No {title.toLowerCase()} records yet.</p>
      )}
      {!isLoading && !error && records.length > 0 && (
        <div className="table-wrap">
          <table className="resource-table">
            <thead>
              <tr>
                {columns.map((column) => <th key={column.key}>{column.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={record._id || record.id || index}>
                  {columns.map((column) => (
                    <td key={column.key}>
                      {column.format ? column.format(record[column.key], record) : displayValue(record[column.key])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
