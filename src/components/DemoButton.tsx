'use client'

import { useAuth } from '@/contexts/AuthContext'

export default function DemoButton() {
  const { isLoggedIn, toggleLogin } = useAuth()

  return (
    <button
      onClick={toggleLogin}
      className="fixed bottom-4 left-4 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2"
      title={isLoggedIn ? "Click to log out (Demo)" : "Click to log in (Demo)"}
    >
      <div className={`w-3 h-3 rounded-full ${isLoggedIn ? 'bg-green-400' : 'bg-red-400'}`}></div>
      <span className="text-sm font-medium">
        {isLoggedIn ? 'Logged In' : 'Demo Login'}
      </span>
    </button>
  )
}