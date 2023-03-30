import { useState } from 'react'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <NavBar></NavBar>
        {/* <hr className='border-[1px] border-cyan-400' /> */}
        <div className="border-b"></div>
        <Hero></Hero>
    </div>
  )
}

export default App
