import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='text-4xl text-gray-900 font-extrabold py-3 px-6 bg-green-500 rounded-2xl shadow-lg shadow-green-600/50 transform transition-transform hover:scale-105'>
      Tailwind In React</h1>
      <Card username="harshith" btnText="Read More" /> 
      <Card username="tony" btnText="Visit Me" />   
    </>
  )
}

export default App
