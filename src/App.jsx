import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <div className='cards'>
        <Card />
        {/* <Card/> */}
      </div>
    </div>
  )
}

export default App
