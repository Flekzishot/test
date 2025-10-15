import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">

      <Header />

      <main role="main" className="flex-grow container mx-auto px-4 py-8 dark:bg-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
