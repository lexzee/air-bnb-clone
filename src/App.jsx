// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  const data = [
    {
      img:"katie-zaferes.png",
      rating:"5.0",
      reviewCount:6,
      country:"USA",
      title:"Life lessons with Katie Zafares",
      price:136
    }
  ]

  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <div className='cards'>
        {data.map((e,i) => {
          return (
            <Card
              key={i}
              img={e.img}
              rating={e.rating}
              reviewCount={e.reviewCount}
              country={e.country}
              title={e.title}
              price={e.price}
            />
          )
        })}
        {/* <Card/> */}
      </div>
    </div>
  )
}

export default App
