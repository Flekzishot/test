import React from 'react'

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">

      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">

        <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">My Stack :0</h1>

        <p className="mt-3 text-center text-gray-700 dark:text-gray-300">Placeholder for my stack...</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded shadow-sm">1</div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded shadow-sm">2</div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded shadow-sm">3</div>
        </div>

      </div>

    </section>
  )
}
