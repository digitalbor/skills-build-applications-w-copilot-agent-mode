const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

function getCollection(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.data)) return payload.data
  return []
}

export async function fetchCollection(resourceOrUrl) {
  const endpoint = resourceOrUrl.startsWith('http')
    ? resourceOrUrl
    : `${API_BASE_URL}/${resourceOrUrl}/`
  const response = await fetch(endpoint)
  if (!response.ok) {
    throw new Error(`Unable to load collection (${response.status})`)
  }

  return getCollection(await response.json())
}

