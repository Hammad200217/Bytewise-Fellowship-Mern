import { useState } from 'react'
import Signup from './Signup'
import Signin from './Signin'
import { BrowserRouterRouter, Routes, Route } from 'react-router-dom'
import Gemini from './component/Gemini'

function App() {
  
  <BrowserRouter>
  <Routes>
    <Route path="/register" element={<Signup/>} />
    <Route path="/login" element={<Signin/>} />
    <Route path="/home" element={<Gemini/>} />
    </Routes>
    
  </BrowserRouter>
  return (
    <>
    
  <Signup/>
  
     
    </>
  )
}

export default App
