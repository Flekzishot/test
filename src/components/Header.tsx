import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (

    <header className="w-full bg-transparent border-b border-gray-200 dark:border-gray-800 dark:bg-gray-900">

      <div className="container mx-auto px-1 py-6 flex items-center justify-between">

        <Link to="/" className="text-xl font-semibold text-black-900  dark:border-gray-900 dark:text-white">test</Link>

        <nav className="flex items-center space-x-4">

          <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-gray-200 dark:hover:text-white">About Me</Link>

          <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-gray-200 dark:hover:text-white">My Skills/Stack</Link>

          <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-gray-200 dark:hover:text-white">Contact Me!</Link>

          

        </nav>

      </div>

    </header>

  )
}
