import React from 'react'

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">

      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">

        <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">About Me</h1>

        <p className="mt-3 text-center text-gray-700 dark:text-gray-300">My name's AGRICH Anas, I am a Front-end developer currently expanding to back-end and hopefully full stack, my goal is to achieve full stack proficiency.</p>
        <div className="flex justify-center">
          <a
            className="inline-flex items-center justify-center mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-transform duration-350 ease-in-out hover:-translate-y-1 hover:scale-110"
            href="https://maps.app.goo.gl/xXhTRVKHcZZjt7Xy8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" ></path>
            </svg>
            <span>Location</span>
          </a>
        </div>
      </div>

    </section>
  )
}
