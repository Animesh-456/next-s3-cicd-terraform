'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchQuote = async () => {
    setLoading(true)
    setQuote('') // Optionally clear previous quote
    setAuthor('')
    setTimeout(async () => {
      try {
        const res = await fetch('https://dummyjson.com/quotes/random')
        const data = await res.json()
        setQuote(data.quote)
        setAuthor(data.author)
      } catch (error) {
        setQuote('Failed to fetch quote.')
        setAuthor('')
      }
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-2xl text-black">
        <h1 className="text-3xl font-bold mb-4 text-center">📘 WordPond</h1>
        <p className="text-xl mb-2 text-center italic">
          {loading ? (
            <span className="flex justify-center items-center">
              <svg className="animate-spin h-6 w-6 mr-2 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
              Loading...
            </span>
          ) : (
            quote
          )}
        </p>
        <p className="text-right font-semibold text-lg">- {author}</p>
        <div className="mt-6 flex justify-center">
          <button
            onClick={fetchQuote}
            className="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition cursor-pointer shadow-lg"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Discover New Word'}
          </button>
        </div>
      </div>
    </div>
  )
}
