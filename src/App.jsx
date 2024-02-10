import { useState } from 'react'
import { nanoid } from 'nanoid'
import Die from './Components/Die'
import './App.css'

function App() {
  const [Dice, setDice] = useState(newDice())

  function generateNewDice() {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 6 + 1),
      isHeld: false,
    }
  }

  function newDice() {
    const numbers = []
    for (let i = 0; i < 10; i++) {
      numbers.push(generateNewDice())
    }
    return numbers
  }

  function rollDice() {
    const updatedDie = Dice.map((die) => {
      if (!die.isHeld) {
        return generateNewDice()
      }
      return die
    })
    setDice(updatedDie)
  }

  function holdDice(id) {
    const updatedDice = Dice.map((die) => {
      if (id === die.id) {
        return { ...die, isHeld: !die.isHeld }
      }
      return die
    })
    setDice(updatedDice)
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
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die
          to freeze it at its current value between rolls.
        </p>
        <div className="die-container">{diceElements}</div>
        <button className="roll-button" onClick={rollDice}>
          Roll Dice
        </button>
      </main>
    </>
  )
}

export default App
