import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)

  const addValue =() =>{
    setCount(counter + 1)

  }
  const removeValue =() =>{
    setCount(counter - 1 )
  }


  return (
    <>
      <h1>Counter Value : {counter}</h1>

      <button onClick={addValue}>Add Value</button> <br />
      <button onClick={removeValue}>remove Value</button>
    </>
  )
}

export default App
