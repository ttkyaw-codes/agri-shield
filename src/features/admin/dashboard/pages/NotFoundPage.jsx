import Link from 'next/link'
import React from 'react'

const NotfoundPage = () => {
  return (
  <section className="bg-white dark:bg-stone-900 h-screen flex justify-center items-center">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <Link href="/dashboard" className="mb-4 inline-flex items-center text-2xl font-semibold text-stone-900 dark:text-white">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-royal-gold-600 dark:text-royal-gold-500">
          404
        </h1>
        </Link>
        <p className="mb-4 text-3xl tracking-tight font-bold text-stone-900 md:text-4xl dark:text-white">
            Something's missing.
        </p>
        <p className="mb-4 text-lg font-light w-96 mx-auto text-stone-500 dark:text-stone-400">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        {/* {token ? (
          <Link
            href="/dashboard"
            className="inline-flex text-white bg-pink-600 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium  text-sm px-5 py-2.5 text-center dark:focus:ring-pink-900 my-4"
          >
            Back to Dashboard
          </Link>
        ) : (
          <Link
            href="/"
            className="inline-flex text-white bg-pink-600 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium  text-sm px-5 py-2.5 text-center dark:focus:ring-pink-900 my-4"
          >
            Back to Login
          </Link>
        )} */}
      </div>
    </div>
  </section>
  )
}

export default NotfoundPage