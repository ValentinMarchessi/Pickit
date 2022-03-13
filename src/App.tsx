import { useState } from 'react'
import './App.scss'
import { Outlet } from 'react-router-dom';
import { Navbar } from './Components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
