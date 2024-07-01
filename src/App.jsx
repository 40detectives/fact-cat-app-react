import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'
// import { CatWithFixedText } from './components/CatWithFixedText'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Cat Fact App</h1>
      <button className="fetch-new-fact" onClick={handleClick}>
        Get new fact
      </button>
      <section className="content">
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={`${imageUrl}`}
            alt={`Random image generated with the first three words from the fact: "${fact}"`}
          />
        )}
      </section>
      {/* <CatWithFixedText /> */}
    </main>
  )
}
