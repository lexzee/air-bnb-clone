// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map((e,i) => {
    return (
      <Card
        key={i}
        {...e}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards'>
        {cards}
        {/* <Card/> */}
      </section>
    </div>
  )
}

export default App
