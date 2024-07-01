import { useState, useEffect } from 'react'
import { fetchRandomImageWithText } from '../services/cat-images-provider'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    // console.log(threeFirstWords)
    fetchRandomImageWithText(threeFirstWords).then(setImageUrl)
  }, [fact])

  return { imageUrl }
}
