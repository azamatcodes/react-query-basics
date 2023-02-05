import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SuperHeroes from './pages/SuperHeroes'
import RQSuperHeroes from './pages/RQSuperHeroes'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-heroes" element={<SuperHeroes />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
      </Routes>
    </div>
  )
}

export default App
