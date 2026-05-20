import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './pages/Hero'
import SecondPage from './pages/SecondPage'
import Thirdpage from './pages/Thirdpage'
import ParallaxHero from './pages/Parallax'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/second' element={<SecondPage/>} />
      <Route path='/third' element={<Thirdpage/>} />
      <Route path='/fourth' element={<ParallaxHero/>} />
    </Routes>
    </>
  )
}

export default App