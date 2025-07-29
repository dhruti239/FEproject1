import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>welcome to frond end class in KLU</h1>
      <h2>todays topic is introduction to react</h2>
      <h3>todays date is 23.07.2025</h3>
      <h4>A.Dhruti</h4>
      <Link to="/page2">Go to Page 2</Link>
      <br></br>
      <Link to="/page3">Go to Page 3</Link>
      <br></br>
      <Link to="/page4">Go to Page 4</Link>
    </>
  )
}

export default App
