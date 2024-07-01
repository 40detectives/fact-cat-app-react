import { useCatImage } from '../hooks/useCatImage'

export function CatWithFixedText() {
  const text = 'Fixed text'
  const { imageUrl } = useCatImage({ fact: text }) // custom hook

  return (
    <>
      {imageUrl && (
        <img
          className="fixed-text-cat"
          src={imageUrl}
          alt={`Random cat image with the fixed text: ${text}`}
        />
      )}
    </>
  )
}
