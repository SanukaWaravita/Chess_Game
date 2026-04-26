import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { initialBoard } from './data/initialBoard'
import { pieceImages } from './data/pieceImages'
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
              row.map((piece, columnIndex) => {
                const isDarkSquare = (rowIndex + columnIndex) % 2 === 1
                
                // Converts the column index into a chess file letter.
                const file = String.fromCharCode(97 + columnIndex)
                // Converts the row index into a chess rank.
                const rank = 8 - rowIndex
                const squareName = `${file}${rank}`

                return (
                  <span key={columnIndex} 
                        className={`square ${isDarkSquare ? 'square-dark' : 'square-light'}`}
                        title={squareName}
                  >
                    {
                      piece && (
                        <img 
                          src={pieceImages[piece]} 
                          alt={piece} 
                          className="piece"
                        />
                      )
                    }
                  </span>
                )
              })
            }
          </div>
        ))}
      </div>
  </main>
  )
}

export default App