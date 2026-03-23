import { useState } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import QuickMode from './pages/QuickMode'
import Sessions from './pages/Sessions'
import Pricing from './pages/Pricing'
import BottomNav from './components/BottomNav'
import './index.css'

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quick" element={<QuickMode />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <BottomNav />
      </div>
    </HashRouter>
  )
}
