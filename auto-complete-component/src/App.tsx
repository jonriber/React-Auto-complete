import { useEffect, useState } from 'react'
import './App.css'
import getAutoCompleteResults from './functions/getAutoCompleteResults'

function App() {
const 
  [query, setQuery] = useState(""),
  [suggestions, setSuggestions] = useState<string[]>([])

  useEffect(() => {
    (async() => {
      if(!query) return
      const data = await getAutoCompleteResults(query);
      setSuggestions(data)
    })()
  },[query]);


  return (
    <div className="App">
      <input value={query} onChange={(e) => setQuery(e.target.value)}/>
      <h3>Results:</h3>
      <div className='results'>
       {suggestions.map(suggestions => <div>{suggestions}</div>)}
      </div>
    </div>
  )
}

export default App
