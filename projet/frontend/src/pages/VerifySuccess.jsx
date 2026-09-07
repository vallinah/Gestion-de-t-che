import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function VerifySuccess() {
  const navigate = useNavigate()

  useEffect(() => {
    const hash = window.location.hash
    const params = new URLSearchParams(hash.substring(1))
    const token = params.get('token')

    if (!token) {
      return
    }

    localStorage.setItem('token', token)

    // Supprime immédiatement le token de l'URL
    window.history.replaceState(
      null,
      '',
      window.location.pathname
    )

    navigate('/dashboard', { replace: true })
  }, [navigate])

  return (
    <div className="min-h-screen bg-slate-50 px-4 flex items-center justify-center">
      <div className="w-full max-w-md">

        {/* Branding */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-200">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Gestion de tâche
          </h1>
        </div>

        {/* Loading card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-200/50">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50">
            <svg
              className="h-8 w-8 animate-spin text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
              />

              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
              />
            </svg>
          </div>

          <h2 className="text-xl font-bold text-slate-900">
            Vérification de votre compte
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Nous finalisons la vérification de votre adresse e-mail.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-indigo-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-600" />
            <span>Redirection vers votre espace...</span>
          </div>
        </div>
      </div>
    </div>
  )
}