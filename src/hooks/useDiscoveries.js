import { useCallback, useEffect, useState } from 'react'
import { species } from '../data/species'

const STORAGE_KEY = 'gabiroba:discoveries'
const ACTIVE_SLUGS = new Set(species.map((item) => item.slug))

function readDiscoveries() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(saved) ? [...new Set(saved.filter((slug) => ACTIVE_SLUGS.has(slug)))] : []
  } catch {
    return []
  }
}

export function useDiscoveries() {
  const [discoveries, setDiscoveries] = useState(() => readDiscoveries())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(discoveries))
  }, [discoveries])

  const discover = useCallback((slug) => {
    let added = false
    setDiscoveries((current) => {
      if (!ACTIVE_SLUGS.has(slug) || current.includes(slug)) return current
      added = true
      return [...current, slug]
    })
    return added
  }, [])

  const reset = useCallback(() => setDiscoveries([]), [])

  return { discoveries, discover, reset }
}
