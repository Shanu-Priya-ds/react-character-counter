import { useState } from 'react'
import './App.css'
import { TextInput } from './components/TextInput/TextInput'

function App() {
  const [count, setCount] = useState(0)
 const handleTextChange=()=>{

 }
  return (
    <>
      <TextInput onTextChange={handleTextChange}></TextInput>
    </>
  )
}

export default App
