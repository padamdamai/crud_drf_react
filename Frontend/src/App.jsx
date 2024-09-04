import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import RoutePath from './RoutePath'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RoutePath/>
    </>
  )
}

export default App
