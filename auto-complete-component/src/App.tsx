import { useEffect, useState } from 'react'
import './App.css'
import getAutoCompleteResults from './functions/getAutoCompleteResults'
import useDebbounceValue from './functions/useDebbounceValue';

function App() {
const 
  [query, setQuery] = useState(""),
  [suggestions, setSuggestions] = useState<string[]>([]),
  debbounceQuery = useDebbounceValue(query);

  useEffect(() => {
    (async() => {
      if(!debbounceQuery) {
        setSuggestions([])
        return
      }
      const data = await getAutoCompleteResults(debbounceQuery);
      setSuggestions(data)
    })()
  },[debbounceQuery]);


  return (
    <div className="App">
      <input value={query} onChange={(e) => setQuery(e.target.value)}/>
      <h3>Results:</h3>
      <div className='results'>
       {suggestions.map(suggestions => <div key={suggestions}>{suggestions}</div>)}
      </div>
    </div>
  )
}

export default App
