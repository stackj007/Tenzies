import { useState } from 'react'
import { nanoid } from 'nanoid'
import Die from './Components/Die'
import './App.css'

function App() {
  const [Dice, setDice] = useState(randomNewDice())

  function randomNewDice() {
    const numbers = []
    for (let i = 0; i < 10; i++) {
      numbers.push({
        id: nanoid(),
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
      })
    }
    return numbers
  }

  function rollDice() {
    setDice(randomNewDice())
  }

  function holdDice(id) {
    console.log(id)
  }

  const diceElements = Dice.map((die) => (
    <Die
      key={die.id}
      id={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={holdDice}
    />
  ))

  return (
    <>
      <main>
        <div className="die-container">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>
          Roll Dice
        </button>
      </main>
    </>
  )
}

export default App
