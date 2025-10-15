import React from 'react'

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-screen-md bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">

        <h1 className="mb-3 text-2xl font-semibold text-center text-gray-900 dark:text-white">Contact</h1>

        <p className="mb-6 text-center text-gray-700 dark:text-gray-300">To get in contact with me dont hesitate to send an email to : </p>
        <a href="mailto:anasagrich24@gmail.com">
        <p className='text-blue-800 dark:text-blue-500  flex justify-center'> anasagrich24@gmail.com </p> 
        </a>

      </div>
    </section>
  )
}
