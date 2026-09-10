import { useNavigate } from 'react-router-dom'
import { logout } from '../services/authService'
import {
  ListTodo,
  Wallet,
  Utensils,
  CheckCircle2,
  Clock3,
  ArrowRight,
  Plus,
  CalendarDays,
  Bell,
  TrendingUp,
} from 'lucide-react'

export default function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login', { replace: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-10 h-20 border-b border-slate-200 bg-white">
        <div className="flex h-full items-center justify-between px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Bonjour 👋
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Voici un aperçu de votre activité.
            </p>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-700"
            aria-label="Notifications"
          >
            <Bell size={19} />
          </button>
        </div>
      </header>

      <main className="px-6 py-6 lg:px-8">
        {/* Filters */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            className="flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600"
          >
            <span>🌐</span>
            Tout
            <span className="text-slate-400">⌄</span>
          </button>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <CalendarDays size={17} />
            <span>Semaine du 8 au 14 septembre</span>
          </div>
        </div>

        {/* Main statistics */}
        <div className="grid gap-5 md:grid-cols-3">
          {/* Tasks */}
          <button
            type="button"
            onClick={() => navigate('/tasks')}
            className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <ListTodo size={21} />
              </div>

              <ArrowRight
                size={18}
                className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-500"
              />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Tâches cette semaine
            </p>

            <div className="mt-1 flex items-end gap-2">
              <span className="text-2xl font-bold text-slate-900">
                12
              </span>

              <span className="mb-1 text-sm text-emerald-600">
                9 terminées
              </span>
            </div>
          </button>

          {/* Budget */}
          <button
            type="button"
            onClick={() => navigate('/budget')}
            className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Wallet size={21} />
              </div>

              <ArrowRight
                size={18}
                className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-violet-500"
              />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Dépenses du mois
            </p>

            <div className="mt-1 flex items-end gap-2">
              <span className="text-2xl font-bold text-slate-900">
                650 000 Ar
              </span>
            </div>
          </button>

          {/* Meals */}
          <button
            type="button"
            onClick={() => navigate('/meals')}
            className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Utensils size={21} />
              </div>

              <ArrowRight
                size={18}
                className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-amber-500"
              />
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Prochain repas
            </p>

            <div className="mt-1 flex items-end gap-2">
              <span className="text-xl font-bold text-slate-900">
                Poulet curry
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-400">
              Ce soir · 19:30
            </p>
          </button>
        </div>

        {/* Second section */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Weekly overview */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Cette semaine
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Votre progression
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <TrendingUp size={18} />
              </div>
            </div>

            {/* Progress */}
            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-slate-500">
                  Tâches terminées
                </span>

                <span className="font-semibold text-slate-700">
                  9 / 12
                </span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-indigo-500"
                  style={{ width: '75%' }}
                />
              </div>
            </div>

            {/* Days */}
            <div className="mt-7 grid grid-cols-7 gap-2">
              {[
                { day: 'Lun', date: '8', tasks: 2 },
                { day: 'Mar', date: '9', tasks: 3 },
                { day: 'Mer', date: '10', tasks: 1 },
                { day: 'Jeu', date: '11', tasks: 2 },
                { day: 'Ven', date: '12', tasks: 2 },
                { day: 'Sam', date: '13', tasks: 1 },
                { day: 'Dim', date: '14', tasks: 1 },
              ].map((item) => (
                <div
                  key={item.date}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-2 text-center"
                >
                  <p className="text-xs text-slate-400">
                    {item.day}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {item.date}
                  </p>

                  <div className="mx-auto mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-600">
                    {item.tasks}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tasks today */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-slate-900">
                  À faire aujourd'hui
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Vos prochaines tâches
                </p>
              </div>

              <Clock3 size={18} className="text-slate-400" />
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                <div className="mt-0.5 h-4 w-4 rounded-full border-2 border-indigo-400" />

                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-700">
                    Faire les courses
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    🏠 Ma maison
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                <div className="mt-0.5 h-4 w-4 rounded-full border-2 border-indigo-400" />

                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-700">
                    Répondre aux emails
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    💼 Travail
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                <div className="mt-0.5 h-4 w-4 rounded-full border-2 border-indigo-400" />

                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-700">
                    Faire du sport
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    🔒 Personnel
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('/tasks')}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-slate-600 transition hover:border-indigo-200 hover:text-indigo-600"
            >
              Voir toutes les tâches
              <ArrowRight size={16} />
            </button>
          </section>
        </div>

        {/* Bottom section */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Next meal */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Prochain repas
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Ce qui est prévu prochainement
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <Utensils size={18} />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 p-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Ce soir · 19:30
                </p>

                <p className="mt-1 text-lg font-bold text-slate-900">
                  🍗 Poulet curry
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  🏠 Ma maison
                </p>
              </div>

              <button
                type="button"
                onClick={() => navigate('/meals')}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-400 shadow-sm transition hover:text-indigo-600"
                aria-label="Voir les repas"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </section>

          {/* Budget */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Budget du mois
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Vue rapide de vos dépenses
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                <Wallet size={18} />
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    650 000 Ar
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    sur un budget de 800 000 Ar
                  </p>
                </div>

                <span className="text-sm font-semibold text-violet-600">
                  81 %
                </span>
              </div>

              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-violet-500"
                  style={{ width: '81%' }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Dépensé
                </span>

                <span className="font-medium text-slate-600">
                  150 000 Ar restant
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Recent activity */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-slate-900">
                Activité récente
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Les dernières actions dans vos espaces
              </p>
            </div>

            <CheckCircle2 size={18} className="text-emerald-500" />
          </div>

          <div className="mt-5 divide-y divide-slate-100">
            <div className="flex items-center gap-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle2 size={17} />
              </div>

              <div className="flex-1">
                <p className="text-sm text-slate-700">
                  La tâche <strong>« Acheter les courses »</strong> a été
                  terminée.
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  🏠 Ma maison · Il y a 15 min
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                <Wallet size={17} />
              </div>

              <div className="flex-1">
                <p className="text-sm text-slate-700">
                  Une dépense de <strong>25 000 Ar</strong> a été ajoutée.
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  💰 Alimentation · Il y a 1 h
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <Utensils size={17} />
              </div>

              <div className="flex-1">
                <p className="text-sm text-slate-700">
                  Le repas <strong>« Poulet curry »</strong> a été ajouté.
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  🍽️ Ma maison · Il y a 2 h
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
