import { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../lib/axios'

export default function VerifyEmail() {
  const [email] = useState(
    localStorage.getItem('verification_email') || ''
  )

  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleResend = async () => {
    setMessage('')
    setError('')
    setLoading(true)

    try {
      const response = await api.post(
        '/api/email/resend-verification',
        { email }
      )

      setMessage(response.data.message)
    } catch (error) {
      setError(
        error.response?.data?.message ||
          'Une erreur est survenue. Veuillez réessayer.'
      )
    } finally {
      setLoading(false)
    }
  }

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

        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xl shadow-slate-200/50 sm:p-8">

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50">
            <svg
              className="h-8 w-8 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l9 6 9-6"
              />
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            Vérifiez votre adresse e-mail
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Nous avons envoyé un lien de vérification à votre
            adresse e-mail.
          </p>

          {email && (
            <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3">
              <p className="break-all text-sm font-semibold text-slate-700">
                {email}
              </p>
            </div>
          )}

          <p className="mt-4 text-xs leading-5 text-slate-400">
            Consultez votre boîte de réception et cliquez sur le
            lien reçu pour activer votre compte.
          </p>

          {message && (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
              {message}
            </div>
          )}

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="button"
            onClick={handleResend}
            disabled={loading || !email}
            className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? 'Envoi en cours...'
              : "Renvoyer l'e-mail"}
          </button>

          <Link
            to="/login"
            className="mt-5 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            ← Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  )
}