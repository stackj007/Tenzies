import { useState } from 'react'
import Die from './Components/Die'
import './App.css'

/**
 * Challenge: Create a `Roll Dice` button that will re-roll
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
      const randomNumber = Math.floor(Math.random() * 6 + 1)
      numbers.push(randomNumber)
    }
    return numbers
  }

  const diceElements = Dice.map((die, index) => (
    <Die key={index} value={die} />
  ))

  function rollDice() {
    setDice(randomNewDice)
  }

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
