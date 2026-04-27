import './App.css'
import CharacterCounter from "./components/CharacterCounter/CharacterCounter";

/**
 * CharacterCounter Usage Examples:
 *
 * 1. With all props (word limits + target reading time):
 *    <CharacterCounter minWords={25} maxWords={100} targetReadingTime={1} />
 *
 * 2. Word limits only:
 *    <CharacterCounter minWords={10} maxWords={50} />
 *
 * 3. No limits (just counts characters, words, and reading time):
 *    <CharacterCounter />
 */

function App() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6">
      <h1 className="text-2xl font-bold mb-6">Character Counter</h1>

      {/* Example: Blog post with word limits and reading time goal */}
      <CharacterCounter minWords={25} maxWords={100} targetReadingTime={1} />
    </div>
  )
}

export default App
