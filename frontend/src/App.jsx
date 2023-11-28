import { useState } from 'react'
import Logo from '../src/assets/deliverit.svg'
import './App.css'
import Warehouse_Dashboard from './pages/Warehouse_Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Warehouse_Dashboard/>
      </div>
    </>
  )
}

export default App
