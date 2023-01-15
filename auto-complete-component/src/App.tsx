import { useEffect, useState } from 'react'
import './App.css'
import getAutoCompleteResults from './functions/getAutoCompleteResults'
import useDebbounceValue from './functions/useDebbounceValue';

function App() {
const 
  [query, setQuery] = useState(""),
  [suggestions, setSuggestions] = useState<string[]>([]),
  debbounceQuery = useDebbounceValue(query),
  controller = new AbortController();

  useEffect(() => {
    const signal = controller.signal;
    (async() => {
      if(!debbounceQuery) {
        setSuggestions([])
        return
      }
      const data = await getAutoCompleteResults(debbounceQuery,signal);
      setSuggestions(data)
    })()

    return () => controller.abort("Cancel Request")
  },[debbounceQuery]);


  return (
    <div className="App">
      <input value={query} onChange={(e) => setQuery(e.target.value)}/>
      <h3>Results:</h3>
      <div className='results'>
        {suggestions.length === 0 && 
        <h3>No Match!</h3>}
        {suggestions.map(suggestions => <div key={suggestions}>{suggestions}</div>)}
      </div>
    </div>
  )
}

export default App
