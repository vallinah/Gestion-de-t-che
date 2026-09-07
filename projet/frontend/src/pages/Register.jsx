import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { register as registerUser } from '../services/authService'

export default function Register() {
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const password = watch('password')

  const onSubmit = async (data) => {
    setServerError('')
    setLoading(true)

    try {
      await registerUser(data)

      localStorage.setItem('verification_email', data.email)

      navigate('/verify-email', { replace: true })
    } catch (error) {
      console.error(error)

      if (error.response?.status === 422) {
        const errors = error.response.data.errors

        if (errors) {
          const firstError = Object.values(errors)[0]?.[0]

          setServerError(
            firstError || 'Les informations fournies sont invalides.'
          )
        } else {
          setServerError('Les informations fournies sont invalides.')
        }
      } else if (error.response?.data?.message) {
        setServerError(error.response.data.message)
      } else {
        setServerError(
          'Une erreur est survenue. Veuillez réessayer.'
        )
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-md">

        {/* Branding */}
        <div className="mb-7 text-center">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Gestion de tâche
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Commencez à organiser vos tâches.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">

          <div className="mb-7">
            <h2 className="text-2xl font-bold text-slate-900">
              Créer un compte
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Quelques informations suffisent pour commencer.
            </p>
          </div>

          {serverError && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {serverError}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Nom */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Nom
              </label>

              <input
                id="name"
                type="text"
                autoComplete="family-name"
                placeholder="Votre nom"
                {...register('name', {
                  required: 'Le nom est obligatoire.',
                })}
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                  errors.name
                    ? 'border-red-400 focus:ring-4 focus:ring-red-100'
                    : 'border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                }`}
              />

              {errors.name && (
                <p className="mt-1.5 text-xs font-medium text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Prénom */}
            <div>
              <label
                htmlFor="first_name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Prénom
              </label>

              <input
                id="first_name"
                type="text"
                autoComplete="given-name"
                placeholder="Votre prénom"
                {...register('first_name', {
                  required: 'Le prénom est obligatoire.',
                })}
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                  errors.first_name
                    ? 'border-red-400 focus:ring-4 focus:ring-red-100'
                    : 'border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                }`}
              />

              {errors.first_name && (
                <p className="mt-1.5 text-xs font-medium text-red-600">
                  {errors.first_name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Adresse e-mail
              </label>

              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="vous@example.com"
                {...register('email', {
                  required: 'L’adresse email est obligatoire.',
                })}
                className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                  errors.email
                    ? 'border-red-400 focus:ring-4 focus:ring-red-100'
                    : 'border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                }`}
              />

              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Mot de passe
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="••••••••"
                  {...register('password', {
                    required: 'Le mot de passe est obligatoire.',
                    minLength: {
                      value: 8,
                      message:
                        'Le mot de passe doit contenir au moins 8 caractères.',
                    },
                  })}
                  className={`w-full rounded-xl border px-4 py-3 pr-12 text-sm outline-none transition ${
                    errors.password
                      ? 'border-red-400 focus:ring-4 focus:ring-red-100'
                      : 'border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1.5 text-xs font-medium text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirmation */}
            <div>
              <label
                htmlFor="password_confirmation"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Confirmer le mot de passe
              </label>

              <div className="relative">
                <input
                  id="password_confirmation"
                  type={
                    showPasswordConfirmation ? 'text' : 'password'
                  }
                  autoComplete="new-password"
                  placeholder="••••••••"
                  {...register('password_confirmation', {
                    required:
                      'La confirmation du mot de passe est obligatoire.',
                    validate: (value) =>
                      value === password ||
                      'Les mots de passe ne correspondent pas.',
                  })}
                  className={`w-full rounded-xl border px-4 py-3 pr-12 text-sm outline-none transition ${
                    errors.password_confirmation
                      ? 'border-red-400 focus:ring-4 focus:ring-red-100'
                      : 'border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100'
                  }`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPasswordConfirmation(
                      !showPasswordConfirmation
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
                >
                  {showPasswordConfirmation ? '🙈' : '👁️'}
                </button>
              </div>

              {errors.password_confirmation && (
                <p className="mt-1.5 text-xs font-medium text-red-600">
                  {errors.password_confirmation.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? 'Création du compte...'
                : 'Créer mon compte'}
            </button>
          </form>

          <div className="mt-7 border-t border-slate-100 pt-6 text-center">
            <p className="text-sm text-slate-500">
              Vous avez déjà un compte ?{' '}
              <Link
                to="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}