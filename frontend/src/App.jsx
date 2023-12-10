import { useState } from 'react'
import Logo from '../src/assets/deliverit.svg'
import './App.css'
import Warehouse_Dashboard from './pages/Warehouse_Dashboard'
import Admin_Dashboard from './pages/Admin_Dashboard'
import User_Dashboard from './pages/User_Dashboard'
import LandingPage from './pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-white'>
        <LandingPage/>
      </div>
    </>
  )
}

export default App
