import './App.css'
import CharacterCounter from "./components/CharacterCounter/CharacterCounter";

function App() {
  return (
    <>
      <CharacterCounter minWords={25} maxWords={100}></CharacterCounter>
    </>
  )
}

export default App
