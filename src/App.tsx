import './App.css'
import StatsDisplay from './components/StatsDisplay/StatsDisplay'
import CharacterCount from "./components/CharacterCounter/CharacterCounter";

function App() {
  return (
    <>
      <CharacterCount minWords={25} maxWords={100}></CharacterCount>
    </>
  )
}

export default App
