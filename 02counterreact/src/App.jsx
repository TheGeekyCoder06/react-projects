import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = () => {
    setCount(count + 1)
    console.log(count)
  }
  const decreaseValue = () => {
    if (count > 0) {
      setCount(count - 1)
      console.log(count)
    }
    else{
      alert("Counter value cannot be negative")
    }
  }
  return (
    <>
      <h1>Counter: {count} </h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add Value {count}</button>
      <br /><br />
      <button onClick={decreaseValue}>Decrease Value {count}</button>

    </>
  )
}

export default App
