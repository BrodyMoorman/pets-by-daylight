import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Box>Login</Box>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  )
}

export default App
