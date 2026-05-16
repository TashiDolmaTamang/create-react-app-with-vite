import { useEffect, useState } from 'react'

function CatFact() {
  const [fact, setFact] = useState('Loading cat fact...')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((data) => setFact(data.fact))
      .catch(() => setFact('Failed to load cat fact'))
  }, [])

  return (
    <div>
      <h2>🐱 Random Cat Fact</h2>
      <p>{fact}</p>
    </div>
  )
}

export default CatFact