import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Die from './Components/Die'
import './App.css'
import Confetti from 'react-confetti'

function App() {
  const [Dice, setDice] = useState(newDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allSameValue = Dice.every(
      (die) => die.isHeld && Dice[0].value === die.value
    )
    if (allSameValue) {
      setTenzies(true)
      console.log('you won!')
    }
  }, [Dice])

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

  function newGame() {
    setDice(newDice())
    setTenzies(false)
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
      {tenzies ? <Confetti /> : ''}
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die
          to freeze it at its current value between rolls.
        </p>
        <div className="die-container">{diceElements}</div>
        <button
          className="roll-button"
          onClick={tenzies ? newGame : rollDice}
        >
          {tenzies ? 'NewGame' : 'Roll Dice'}
        </button>
      </main>
    </>
  )
}

export default App
