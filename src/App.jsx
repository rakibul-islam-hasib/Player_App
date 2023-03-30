import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <NavBar></NavBar>
    </div>
  )
}

export default App
