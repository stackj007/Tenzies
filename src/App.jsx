import { useState } from 'react'
import Die from './Components/Die'
import './App.css'

function randomNewDice() {
  const numbers = []
  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 6 + 1)
    numbers.push(randomNumber)
  }
  return numbers
}

console.log(randomNewDice())

function App() {
  return (
    <>
      <main>
        <div className="die-container">
          <Die value={1} />
          <Die value={2} />
          <Die value={3} />
          <Die value={4} />
          <Die value={5} />
          <Die value={6} />
          <Die value={2} />
          <Die value={5} />
          <Die value={4} />
          <Die value={2} />
        </div>
      </main>
    </>
  )
}

export default App
