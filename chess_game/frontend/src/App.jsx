import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { initialBoard } from './data/initialBoard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  console.log(initialBoard)

  return (
    <main className="app">
      <h1>Chess Game</h1>

      <div className="board">
        {initialBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {
              row.map((piece, columnIndex) => (
                <span key={columnIndex} className="square">
                  {
                    piece || '-'
                    // If there is a piece, show the piece. 
                    // Otherwise show '-'
                  }
                </span>
              ))
            }
          </div>
        ))}
      </div>
  </main>
  )
}

export default App
