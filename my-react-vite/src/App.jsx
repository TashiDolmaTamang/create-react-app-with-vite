import { useState } from 'react'
import './App.css'
import CatFact from './CatFact' // (only if you created Task 3 component)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">

      {/* HEADER */}
      <header className="header">
        <h1>🚀 My First React + Vite App</h1>
        <p>Built using React (JavaScript) and Vite</p>
      </header>

      {/* COUNTER SECTION */}
      <section className="card">
        <h2>Interactive Counter</h2>

        <button
          className="counter-btn"
          onClick={() => setCount((c) => c + 1)}
        >
          Count is {count}
        </button>
      </section>

      {/* TASK 3 - API SECTION */}
      <section className="card">
        <CatFact />
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>⚡ Powered by React + Vite</p>
      </footer>

    </div>
  )
}

export default App