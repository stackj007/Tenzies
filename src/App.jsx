import { useState } from 'react'
import Die from './Components/Die'
import './App.css'

function App() {
  const [Dice, setDice] = useState(randomNewDice())

  function randomNewDice() {
    const numbers = []
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 6 + 1)
      numbers.push(randomNumber)
    }
    return numbers
  }

  const diceElements = Dice.map((die) => (
    <Die value={die} />
  ))

  return (
    <>
      <main>
        <div className="die-container">{diceElements}</div>
      </main>
    </>
  )
}

export default App
