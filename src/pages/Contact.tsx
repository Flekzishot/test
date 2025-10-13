import React from 'react'

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-screen-md bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">

        <h1 className="mb-3 text-2xl font-semibold text-center text-gray-900 dark:text-white">Contact</h1>

        <p className="mb-6 text-center text-gray-700 dark:text-gray-300">Leave a message and I’ll get back to you soon.</p>

        <form>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Email</label>
            <input id="email" name="email" type="email"
              className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="example@example.example" />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Subject</label>
            <input id="subject" name="subject" type="text"
              className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="Subject" />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Message</label>
            <textarea id="message" name="message" rows={6}
              className="w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="Anything :3" />
          </div>

          <div>
            <button type="submit"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
              Send
            </button>
          </div>

        </form>

      </div>
    </section>
  )
}
