import React from 'react'

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">

      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">

        <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">My Stack</h1>

        <p className="mt-3 text-center text-gray-700 dark:text-gray-300">Current stack</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-200 rounded-xl shadow-sm flex justify-center">HTML like everyone.</div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-200 rounded-xl shadow-sm flex justify-center">C not in its entierity</div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-200 rounded-xl shadow-sm flex justify-center">JS Basic website dev knowledge</div>
          <div className="md:col-span-3 flex justify-center gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-200 rounded-xl shadow-sm max-w-xs w-full text-center">TS, Currently learning TypeScript</div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-200 rounded-xl shadow-sm max-w-xs w-full text-center">Tailwind (CSS) my favorite Css library, easy to use and useful features</div>
          </div>

        </div>
        <p className="mt-3 text-center text-gray-700 dark:text-gray-300">Future stack ( what i am planning to learn )</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-blue-200 dark:bg-blue-950 text-gray-900 dark:text-gray-200 text-center rounded-xl ">TypeScript</div>
          <div className="p-4 bg-blue-200 dark:bg-blue-950 text-gray-900 dark:text-gray-200 text-center rounded-xl">Rust</div>
          <div className="p-4 bg-blue-200 dark:bg-blue-950 text-gray-900 dark:text-gray-200 text-center rounded-xl">Node.js</div>
          <div className="p-4 bg-blue-200 dark:bg-blue-950 text-gray-900 dark:text-gray-200 text-center rounded-xl">Angular</div>
          <div className="p-4 bg-blue-200 dark:bg-blue-950 text-gray-900 dark:text-gray-200 text-center rounded-xl">Flutter</div>
          <div className='p-4 bg-blue-200 dark:bg-blue-950 text-gray-900 dark:text-gray-200 text-center rounded-xl'>Java</div>
          
          <div className="md:col-span-3 flex justify-center">
            <div className="p-4 bg-blue-200 dark:bg-blue-950 text-gray-900 dark:text-gray-200 text-center max-w-xs w-full rounded-xl">C++</div>
          </div>
          
        </div>

      </div>

    </section>
  )
}
