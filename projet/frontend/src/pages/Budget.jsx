import { useMemo, useState } from 'react'
import {
  Plus,
  ChevronDown,
  ArrowDownLeft,
  ArrowUpRight,
  Wallet,
  PiggyBank,
  ShoppingCart,
} from 'lucide-react'

const spaces = [
  { name: 'Tout', icon: '🌐' },
  { name: 'Personnel', icon: '🔒' },
  { name: 'Ma maison', icon: '🏠' },
  { name: 'Travail', icon: '💼' },
]

const categories = [
  {
    name: 'Alimentation',
    budget: 400000,
    spent: 320000,
    icon: '🛒',
  },
  {
    name: 'Logement',
    budget: 300000,
    spent: 200000,
    icon: '🏠',
  },
  {
    name: 'Transport',
    budget: 150000,
    spent: 80000,
    icon: '🚗',
  },
  {
    name: 'Loisirs',
    budget: 100000,
    spent: 55000,
    icon: '🎮',
  },
  {
    name: 'Autres',
    budget: 100000,
    spent: 45000,
    icon: '📦',
  },
]

const initialExpenses = [
  {
    id: 1,
    title: 'Courses',
    amount: 85000,
    category: 'Alimentation',
    space: 'Ma maison',
    date: '8 sept. 2026',
  },
  {
    id: 2,
    title: 'Transport',
    amount: 10000,
    category: 'Transport',
    space: 'Personnel',
    date: '8 sept. 2026',
  },
  {
    id: 3,
    title: 'Loyer',
    amount: 200000,
    category: 'Logement',
    space: 'Ma maison',
    date: '5 sept. 2026',
  },
  {
    id: 4,
    title: 'Restaurant',
    amount: 25000,
    category: 'Alimentation',
    space: 'Personnel',
    date: '4 sept. 2026',
  },
  {
    id: 5,
    title: 'Abonnement',
    amount: 15000,
    category: 'Loisirs',
    space: 'Personnel',
    date: '2 sept. 2026',
  },
]

const initialIncomes = [
  {
    id: 1,
    title: 'Salaire',
    amount: 1200000,
    space: 'Personnel',
    date: '1 sept. 2026',
  },
  {
    id: 2,
    title: 'Freelance',
    amount: 300000,
    space: 'Travail',
    date: '3 sept. 2026',
  },
  {
    id: 3,
    title: 'Autres revenus',
    amount: 50000,
    space: 'Personnel',
    date: '6 sept. 2026',
  },
]

const formatAmount = (amount) => {
  return new Intl.NumberFormat('fr-FR').format(amount) + ' Ar'
}

const getSpaceIcon = (space) => {
  const currentSpace = spaces.find((item) => item.name === space)

  return currentSpace?.icon || '🌐'
}

const getCategoryPercentage = (spent, budget) => {
  if (!budget) return 0

  return Math.min((spent / budget) * 100, 100)
}

export default function Budget() {
  const [selectedSpace, setSelectedSpace] = useState('Tout')
  const [selectedMonth] = useState('Septembre 2026')
  const [spaceMenuOpen, setSpaceMenuOpen] = useState(false)

  const totalBudget = useMemo(
    () => categories.reduce((total, category) => total + category.budget, 0),
    [],
  )

  const totalSpent = useMemo(
    () => categories.reduce((total, category) => total + category.spent, 0),
    [],
  )

  const totalIncome = useMemo(
    () => initialIncomes.reduce((total, income) => total + income.amount, 0),
    [],
  )

  const budgetRemaining = Math.max(totalBudget - totalSpent, 0)
  const balance = totalIncome - totalSpent

  const filteredExpenses =
    selectedSpace === 'Tout'
      ? initialExpenses
      : initialExpenses.filter((expense) => expense.space === selectedSpace)

  const filteredIncomes =
    selectedSpace === 'Tout'
      ? initialIncomes
      : initialIncomes.filter((income) => income.space === selectedSpace)

  const stats = [
    {
      label: 'Revenus',
      value: totalIncome,
      icon: ArrowDownLeft,
      iconClass: 'bg-emerald-50 text-emerald-600',
      valueClass: 'text-slate-900',
    },
    {
      label: 'Budget',
      value: totalBudget,
      icon: PiggyBank,
      iconClass: 'bg-indigo-50 text-indigo-600',
      valueClass: 'text-slate-900',
    },
    {
      label: 'Dépenses',
      value: totalSpent,
      icon: ArrowUpRight,
      iconClass: 'bg-amber-50 text-amber-600',
      valueClass: 'text-slate-900',
    },
    {
      label: 'Budget restant',
      value: budgetRemaining,
      icon: Wallet,
      iconClass: 'bg-violet-50 text-violet-600',
      valueClass: 'text-violet-600',
    },
    {
      label: 'Solde',
      value: balance,
      icon: Wallet,
      iconClass: 'bg-sky-50 text-sky-600',
      valueClass: balance >= 0 ? 'text-slate-900' : 'text-red-600',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 h-20 border-b border-slate-200 bg-white">
        <div className="flex h-full items-center justify-between px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Budget</h1>

            <p className="mt-1 text-sm text-slate-500">
              Suivez vos revenus, vos dépenses et gardez le contrôle de votre
              budget.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Plus size={18} />

            <span className="hidden sm:inline">Nouvelle dépense</span>
          </button>
        </div>
      </header>

      <main className="px-6 py-6 lg:px-8">
        {/* Filtres */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Sélecteur d'espace */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSpaceMenuOpen(!spaceMenuOpen)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600"
            >
              <span>{getSpaceIcon(selectedSpace)}</span>

              <span>{selectedSpace}</span>

              <ChevronDown
                size={16}
                className={`ml-1 text-slate-400 transition ${
                  spaceMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {spaceMenuOpen && (
              <div className="absolute left-0 top-full z-30 mt-2 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
                {spaces.map((space) => (
                  <button
                    key={space.name}
                    type="button"
                    onClick={() => {
                      setSelectedSpace(space.name)
                      setSpaceMenuOpen(false)
                    }}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                      selectedSpace === space.name
                        ? 'bg-indigo-50 font-medium text-indigo-600'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{space.icon}</span>

                    {space.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mois */}
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm">
            {selectedMonth}
          </div>
        </div>

        {/* Statistiques */}
        <section className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-500">
                      {stat.label}
                    </p>

                    <p
                      className={`mt-2 text-xl font-bold tracking-tight ${stat.valueClass}`}
                    >
                      {formatAmount(stat.value)}
                    </p>
                  </div>

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${stat.iconClass}`}
                  >
                    <Icon size={19} strokeWidth={2.2} />
                  </div>
                </div>
              </div>
            )
          })}
        </section>

        {/* Budget + Revenus */}
        <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          {/* Budget par catégorie */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Budget par catégorie
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Répartition de votre budget mensuel
                </p>
              </div>

              <button
                type="button"
                className="rounded-lg px-3 py-2 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50"
              >
                Modifier
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {categories.map((category) => {
                const percentage = getCategoryPercentage(
                  category.spent,
                  category.budget,
                )

                const remaining = Math.max(
                  category.budget - category.spent,
                  0,
                )

                const isOverBudget = category.spent > category.budget

                return (
                  <div key={category.name} className="px-5 py-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg">
                          {category.icon}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-slate-800">
                            {category.name}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-400">
                            {formatAmount(category.spent)} sur{' '}
                            {formatAmount(category.budget)}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        <p
                          className={`text-sm font-bold ${
                            isOverBudget
                              ? 'text-red-600'
                              : 'text-slate-800'
                          }`}
                        >
                          {formatAmount(remaining)}
                        </p>

                        <p className="text-[11px] font-medium text-slate-400">
                          restant
                        </p>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full transition-all ${
                            isOverBudget
                              ? 'bg-red-500'
                              : percentage >= 80
                                ? 'bg-amber-500'
                                : 'bg-indigo-500'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>

                      <div className="mt-1.5 flex justify-between text-[11px] font-medium text-slate-400">
                        <span>{Math.round(percentage)}% utilisé</span>

                        <span>
                          Budget : {formatAmount(category.budget)}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Budget total */}
            <div className="border-t border-slate-100 bg-slate-50/60 px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700">
                  Budget total
                </span>

                <span className="text-sm font-bold text-slate-900">
                  {formatAmount(totalBudget)}
                </span>
              </div>
            </div>
          </section>

          {/* Revenus */}
          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Revenus
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Argent reçu ce mois-ci
                </p>
              </div>

              <button
                type="button"
                className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700"
              >
                <Plus size={15} />

                Ajouter
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {filteredIncomes.map((income) => (
                <div
                  key={income.id}
                  className="flex items-center justify-between gap-4 px-5 py-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <ArrowDownLeft size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-800">
                        {income.title}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        {getSpaceIcon(income.space)} {income.space} ·{' '}
                        {income.date}
                      </p>
                    </div>
                  </div>

                  <p className="shrink-0 text-sm font-bold text-emerald-600">
                    +{formatAmount(income.amount)}
                  </p>
                </div>
              ))}
            </div>

            {filteredIncomes.length === 0 && (
              <div className="px-5 py-10 text-center">
                <p className="text-sm font-medium text-slate-600">
                  Aucun revenu
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Aucun revenu enregistré dans cet espace.
                </p>
              </div>
            )}
          </section>
        </div>

        {/* Dépenses récentes */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Dépenses récentes
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Les dernières dépenses enregistrées
              </p>
            </div>

            <button
              type="button"
              className="flex w-fit items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700"
            >
              <Plus size={15} />

              Nouvelle dépense
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {filteredExpenses.map((expense) => (
              <div
                key={expense.id}
                className="flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-slate-50/70"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <ShoppingCart size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-800">
                      {expense.title}
                    </p>

                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <span>{expense.category}</span>

                      <span>•</span>

                      <span>
                        {getSpaceIcon(expense.space)} {expense.space}
                      </span>

                      <span>•</span>

                      <span>{expense.date}</span>
                    </div>
                  </div>
                </div>

                <p className="shrink-0 text-sm font-bold text-slate-800">
                  -{formatAmount(expense.amount)}
                </p>
              </div>
            ))}
          </div>

          {filteredExpenses.length === 0 && (
            <div className="px-5 py-10 text-center">
              <p className="text-sm font-medium text-slate-600">
                Aucune dépense
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Aucune dépense enregistrée dans cet espace.
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
