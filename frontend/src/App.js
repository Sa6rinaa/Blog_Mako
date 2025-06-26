import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Abysse from './Abysse'
import Shark from './Shark'
import Prehistoric from './Prehistoric'

import HomePage from './HomePage'
import Contact from './Contact'  // Route contact séparée

function ThemedMain({ children }) {
  const location = useLocation()
  let themeClass = ''

  if (location.pathname === '/abysses') themeClass = 'abysses-theme'
  else if (location.pathname === '/sharks') themeClass = 'sharks-theme'
  else if (location.pathname === '/prehistoric') themeClass = 'prehistoric-theme'

  return <main className={themeClass}>{children}</main>
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ThemedMain>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/abysses" element={<Abysse />} />
          <Route path="/sharks" element={<Shark />} />
          <Route path="/prehistoric" element={<Prehistoric />} />
          <Route path="/contact" element={<Contact />} /> {/* Route dédiée */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ThemedMain>
      <Footer />
    </BrowserRouter>
  )
}

export default App
