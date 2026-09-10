import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock,
  Settings,
  Users,
  Utensils,
} from 'lucide-react'

const spaces = {
  home: {
    name: 'Ma maison',
    description: 'Organisation du foyer',
    icon: '🏠',
    members: [
      { name: 'Otisoa', role: 'Propriétaire', initials: 'OV' },
      { name: 'Marie', role: 'Membre', initials: 'M' },
      { name: 'Paul', role: 'Membre', initials: 'P' },
    ],
  },
  work: {
    name: 'Travail',
    description: 'Mes projets professionnels',
    icon: '💼',
    members: [
      { name: 'Otisoa', role: 'Propriétaire', initials: 'OV' },
      { name: 'Marie', role: 'Membre', initials: 'M' },
    ],
  },
}

const tasks = [
  {
    title: 'Faire les courses',
    date: "Aujourd'hui",
    time: '17:30',
    person: 'Otisoa',
    completed: false,
  },
  {
    title: 'Nettoyer la cuisine',
    date: 'Demain',
    time: '10:00',
    person: 'Marie',
    completed: false,
  },
  {
    title: 'Sortir les poubelles',
    date: 'Vendredi',
    time: '19:00',
    person: 'Paul',
    completed: false,
  },
]

const meals = [
  {
    date: "Aujourd'hui",
    type: 'Dîner',
    meal: 'Riz + poulet',
  },
  {
    date: 'Demain',
    type: 'Déjeuner',
    meal: 'Pâtes bolognaise',
  },
  {
    date: 'Vendredi',
    type: 'Dîner',
    meal: 'Salade + omelette',
  },
]

const stats = [
  {
    title: 'Tâches',
    value: '8',
    description: '3 à faire',
    icon: CheckCircle2,
    href: '/tasks',
  },
  {
    title: 'Budget',
    value: '350 000 Ar',
    description: 'restant',
    icon: CircleDollarSign,
    href: '/budget',
  },
  {
    title: 'Repas',
    value: '18',
    description: 'planifiés',
    icon: Utensils,
    href: '/meals',
  },
]

export default function SpaceDetails() {
  const { id } = useParams()

  const space = spaces[id] || spaces.home

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 h-20 border-b border-slate-200 bg-white">
        <div className="flex h-full items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              to="/spaces"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              title="Retour aux espaces"
            >
              <ArrowLeft size={19} />
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                {space.icon}
              </div>

              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  {space.name}
                </h1>
                <p className="text-sm text-slate-500">
                  {space.description}
                </p>
              </div>
            </div>
          </div>

          <Link
            to={`/spaces/${id}/manage`}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            <Settings size={17} />
            <span className="hidden sm:inline">Gérer</span>
          </Link>
        </div>
      </header>

      <main className="px-6 py-6 lg:px-8">
        {/* Space information */}
        <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Espace partagé
              </p>

              <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                <Users size={17} className="text-slate-400" />
                <span>
                  {space.members.length} membres
                </span>
              </div>
            </div>

            <div className="flex -space-x-2">
              {space.members.map((member) => (
                <div
                  key={member.name}
                  title={`${member.name} — ${member.role}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-indigo-100 text-xs font-semibold text-indigo-700"
                >
                  {member.initials}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-6">
          <h2 className="mb-4 text-base font-semibold text-slate-900">
            Cette semaine
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon

              return (
                <Link
                  key={stat.title}
                  to={`${stat.href}?space=${encodeURIComponent(space.name)}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Icon size={20} />
                    </div>

                    <ArrowRight
                      size={18}
                      className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-500"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-medium text-slate-500">
                      {stat.title}
                    </p>

                    <p className="mt-1 text-xl font-bold text-slate-900">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {stat.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Content */}
        <div className="grid gap-6 xl:grid-cols-2">
          {/* Tasks */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Tâches à venir
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Les prochaines tâches de l'espace
                </p>
              </div>

              <Link
                to={`/tasks?space=${encodeURIComponent(space.name)}`}
                className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Voir toutes
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {tasks.map((task) => (
                <div
                  key={task.title}
                  className="flex items-center gap-4 px-5 py-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400">
                    <CheckCircle2 size={18} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-800">
                      {task.title}
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <CalendarDays size={13} />
                        {task.date}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        {task.time}
                      </span>
                    </div>
                  </div>

                  <span className="hidden rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600 sm:block">
                    {task.person}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Meals */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="font-semibold text-slate-900">
                  Repas à venir
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Les prochains repas planifiés
                </p>
              </div>

              <Link
                to={`/meals?space=${encodeURIComponent(space.name)}`}
                className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Voir les repas
                <ChevronRight size={16} />
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {meals.map((meal) => (
                <div
                  key={`${meal.date}-${meal.type}`}
                  className="flex items-center gap-4 px-5 py-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                    <Utensils size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-slate-800">
                        {meal.meal}
                      </p>

                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                        {meal.type}
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-slate-400">
                      {meal.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Members */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
              <h2 className="font-semibold text-slate-900">
                Membres de l'espace
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Les personnes qui ont accès à cet espace
              </p>
            </div>

            <Link
              to={`/spaces/${id}/manage`}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              Gérer les membres
            </Link>
          </div>

          <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3">
            {space.members.map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                  {member.initials}
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-800">
                    {member.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
