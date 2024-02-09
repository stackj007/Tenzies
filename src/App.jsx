import { useState } from 'react'
import Die from './Components/Die'
import './App.css'

/**
 *  Create a `Roll Dice` button that will re-roll
 * all 10 dice
 *
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
 */

function App() {
  const [Dice, setDice] = useState(randomNewDice())

  function randomNewDice() {
    const numbers = []
    for (let i = 0; i < 10; i++) {
      numbers.push({
        value: Math.floor(Math.random() * 6 + 1),
        isHeld: false,
      })
    }
    return numbers
  }

  function rollDice() {
    setDice(randomNewDice)
  }

  const diceElements = Dice.map((die, index) => (
    <Die key={index} value={die.value} />
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
