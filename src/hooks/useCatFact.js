import { useEffect, useState } from 'react'
import { fetchRandomFact } from '../services/facts-provider'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    fetchRandomFact().then(setFact)
  }

  useEffect(refreshFact, []) // --> gets the fact when loading for the first time

  return { fact, refreshFact }
}
