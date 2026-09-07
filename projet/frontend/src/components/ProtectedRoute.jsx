import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getCurrentUser } from '../services/authService'

export default function ProtectedRoute() {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      setLoading(false)
      return
    }

    getCurrentUser()
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data))
        setAuthenticated(true)
      })
      .catch(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('person')
        setAuthenticated(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Chargement...</p>
      </div>
    )
  }

  if (!authenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}