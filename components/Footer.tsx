import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-gray-200 dark:border-gray-800 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} Agrich Anas. All rights reserved. :D
      </div>
    </footer>
  )
}
