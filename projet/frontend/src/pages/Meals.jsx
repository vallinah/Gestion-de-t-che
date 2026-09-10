import { useState } from 'react'
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MoreVertical,
  Utensils,
} from 'lucide-react'

const spaces = [
  { name: 'Tout', icon: '🌐' },
  { name: 'Personnel', icon: '🔒' },
  { name: 'Ma maison', icon: '🏠' },
  { name: 'Travail', icon: '💼' },
]

const weekDays = [
  {
    day: 'Lun.',
    fullDay: 'Lundi',
    date: '8',
    month: 'sept.',
    current: false,
  },
  {
    day: 'Mar.',
    fullDay: 'Mardi',
    date: '9',
    month: 'sept.',
    current: false,
  },
  {
    day: 'Mer.',
    fullDay: 'Mercredi',
    date: '10',
    month: 'sept.',
    current: true,
  },
  {
    day: 'Jeu.',
    fullDay: 'Jeudi',
    date: '11',
    month: 'sept.',
    current: false,
  },
  {
    day: 'Ven.',
    fullDay: 'Vendredi',
    date: '12',
    month: 'sept.',
    current: false,
  },
  {
    day: 'Sam.',
    fullDay: 'Samedi',
    date: '13',
    month: 'sept.',
    current: false,
  },
  {
    day: 'Dim.',
    fullDay: 'Dimanche',
    date: '14',
    month: 'sept.',
    current: false,
  },
]

const mealTypes = [
  {
    name: 'Petit-déjeuner',
    shortName: 'Petit-déj.',
    icon: '🌅',
  },
  {
    name: 'Déjeuner',
    shortName: 'Déjeuner',
    icon: '☀️',
  },
  {
    name: 'Goûter',
    shortName: 'Goûter',
    icon: '🍎',
  },
  {
    name: 'Dîner',
    shortName: 'Dîner',
    icon: '🌙',
  },
]

const initialMeals = [
  {
    id: 1,
    day: 'Lundi',
    type: 'Petit-déjeuner',
    title: 'Pain + œufs',
    space: 'Personnel',
    note: 'Rapide',
  },
  {
    id: 2,
    day: 'Lundi',
    type: 'Déjeuner',
    title: 'Poulet et riz',
    space: 'Ma maison',
    note: null,
  },
  {
    id: 3,
    day: 'Lundi',
    type: 'Goûter',
    title: 'Fruit + yaourt',
    space: 'Ma maison',
    note: null,
  },
  {
    id: 4,
    day: 'Lundi',
    type: 'Dîner',
    title: 'Soupe de légumes',
    space: 'Ma maison',
    note: 'Léger',
  },

  {
    id: 5,
    day: 'Mardi',
    type: 'Petit-déjeuner',
    title: 'Crêpes',
    space: 'Personnel',
    note: null,
  },
  {
    id: 6,
    day: 'Mardi',
    type: 'Déjeuner',
    title: 'Spaghetti bolognaise',
    space: 'Ma maison',
    note: null,
  },
  {
    id: 7,
    day: 'Mardi',
    type: 'Goûter',
    title: 'Banane',
    space: 'Personnel',
    note: 'Rapide',
  },
  {
    id: 8,
    day: 'Mardi',
    type: 'Dîner',
    title: 'Salade composée',
    space: 'Personnel',
    note: 'Léger',
  },

  {
    id: 9,
    day: 'Mercredi',
    type: 'Petit-déjeuner',
    title: 'Yaourt + fruits',
    space: 'Personnel',
    note: 'Rapide',
  },
  {
    id: 10,
    day: 'Mercredi',
    type: 'Déjeuner',
    title: 'Riz sauté au poulet',
    space: 'Ma maison',
    note: null,
  },
  {
    id: 11,
    day: 'Mercredi',
    type: 'Goûter',
    title: 'Pain + confiture',
    space: 'Ma maison',
    note: null,
  },

  {
    id: 12,
    day: 'Jeudi',
    type: 'Petit-déjeuner',
    title: 'Omelette',
    space: 'Personnel',
    note: null,
  },
  {
    id: 13,
    day: 'Jeudi',
    type: 'Déjeuner',
    title: 'Pâtes aux légumes',
    space: 'Ma maison',
    note: null,
  },
  {
    id: 14,
    day: 'Jeudi',
    type: 'Goûter',
    title: 'Fruit frais',
    space: 'Personnel',
    note: 'Léger',
  },
  {
    id: 15,
    day: 'Jeudi',
    type: 'Dîner',
    title: 'Poisson et légumes',
    space: 'Ma maison',
    note: 'Équilibré',
  },

  {
    id: 16,
    day: 'Vendredi',
    type: 'Petit-déjeuner',
    title: 'Pain + café',
    space: 'Personnel',
    note: 'Rapide',
  },
  {
    id: 17,
    day: 'Vendredi',
    type: 'Déjeuner',
    title: 'Poulet rôti + riz',
    space: 'Ma maison',
    note: null,
  },
  {
    id: 18,
    day: 'Vendredi',
    type: 'Goûter',
    title: 'Biscuits + thé',
    space: 'Personnel',
    note: null,
  },
  {
    id: 19,
    day: 'Vendredi',
    type: 'Dîner',
    title: 'Sandwich maison',
    space: 'Personnel',
    note: 'Rapide',
  },

  {
    id: 20,
    day: 'Samedi',
    type: 'Petit-déjeuner',
    title: 'Crêpes aux fruits',
    space: 'Ma maison',
    note: null,
  },
  {
    id: 21,
    day: 'Samedi',
    type: 'Déjeuner',
    title: 'Riz + viande',
    space: 'Ma maison',
    note: null,
  },
  {
    id: 22,
    day: 'Samedi',
    type: 'Goûter',
    title: 'Gâteau maison',
    space: 'Ma maison',
    note: 'Weekend',
  },
  {
    id: 23,
    day: 'Samedi',
    type: 'Dîner',
    title: 'Pizza maison',
    space: 'Ma maison',
    note: 'Weekend',
  },

  {
    id: 24,
    day: 'Dimanche',
    type: 'Petit-déjeuner',
    title: 'Pain + omelette',
    space: 'Ma maison',
    note: null,
  },
  {
    id: 25,
    day: 'Dimanche',
    type: 'Déjeuner',
    title: 'Poulet au four',
    space: 'Ma maison',
    note: 'Famille',
  },
  {
    id: 26,
    day: 'Dimanche',
    type: 'Goûter',
    title: 'Fruits + jus',
    space: 'Ma maison',
    note: null,
  },
  {
    id: 27,
    day: 'Dimanche',
    type: 'Dîner',
    title: 'Soupe légère',
    space: 'Personnel',
    note: 'Léger',
  },
]

function getSpaceIcon(space) {
  const currentSpace = spaces.find((item) => item.name === space)

  return currentSpace?.icon || '🌐'
}

export default function Meals() {
  const [meals] = useState(initialMeals)
  const [selectedSpace, setSelectedSpace] = useState('Tout')
  const [spaceMenuOpen, setSpaceMenuOpen] = useState(false)

  const getMeal = (day, type) => {
    return meals.find(
      (meal) =>
        meal.day === day &&
        meal.type === type &&
        (selectedSpace === 'Tout' || meal.space === selectedSpace),
    )
  }

  const filteredMeals = meals.filter(
    (meal) => selectedSpace === 'Tout' || meal.space === selectedSpace,
  )

  const plannedMeals = filteredMeals.length

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 h-20 border-b border-slate-200 bg-white">
        <div className="flex h-full items-center justify-between px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Repas</h1>

            <p className="mt-1 text-sm text-slate-500">
              Planifiez vos repas et organisez votre menu de la semaine.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Plus size={18} />

            <span className="hidden sm:inline">Ajouter un repas</span>
          </button>
        </div>
      </header>

      <main className="px-6 py-6 lg:px-8">
        {/* Filtres et navigation */}
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

          {/* Navigation semaine */}
          <div className="flex items-center justify-between gap-2 sm:justify-end">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-indigo-200 hover:text-indigo-600"
              aria-label="Semaine précédente"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
            >
              Cette semaine
            </button>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-indigo-200 hover:text-indigo-600"
              aria-label="Semaine suivante"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Résumé de la semaine */}
        <section className="mt-5 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Semaine du 8 au 14 septembre 2026
              </p>

              <p className="mt-1 text-sm text-slate-500">
                <span className="font-semibold text-slate-700">
                  {plannedMeals}
                </span>{' '}
                repas planifié{plannedMeals > 1 ? 's' : ''}
              </p>
            </div>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Utensils size={19} />
            </div>
          </div>
        </section>

        {/* Menu de la semaine */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <div className="min-w-[1220px]">
              {/* En-tête */}
              <div className="grid grid-cols-[150px_repeat(7,minmax(150px,1fr))] border-b-2 border-slate-200">
                {/* Cellule vide au-dessus des types */}
                <div className="border-r border-slate-200 bg-slate-100/70 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Menu
                  </p>
                </div>

                {/* Jours */}
                {weekDays.map((day) => (
                  <div
                    key={day.fullDay}
                    className={`border-r border-slate-200 px-4 py-4 last:border-r-0 ${
                      day.current
                        ? 'border-b-2 border-indigo-300 bg-indigo-50'
                        : 'bg-slate-100/70'
                    }`}
                  >
                    <p
                      className={`text-base font-bold tracking-tight ${
                        day.current
                          ? 'text-indigo-600'
                          : 'text-slate-800'
                      }`}
                    >
                      {day.day} {day.date} {day.month}
                    </p>

                    <p
                      className={`mt-1 text-xs font-medium ${
                        day.current
                          ? 'text-indigo-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {day.fullDay}
                    </p>
                  </div>
                ))}
              </div>

              {/* Lignes des types de repas */}
              {mealTypes.map((mealType, mealTypeIndex) => (
                <div
                  key={mealType.name}
                  className={`grid grid-cols-[150px_repeat(7,minmax(150px,1fr))] ${
                    mealTypeIndex < mealTypes.length - 1
                      ? 'border-b border-slate-200'
                      : ''
                  }`}
                >
                  {/* Type de repas */}
                  <div className="flex min-h-[190px] items-center border-r border-slate-200 bg-slate-50 px-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-lg shadow-sm">
                        {mealType.icon}
                      </span>

                      <div>
                        <p className="text-sm font-bold text-slate-700">
                          {mealType.shortName}
                        </p>

                        <p className="mt-0.5 text-[11px] font-medium text-slate-400">
                          {mealType.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Repas de chaque jour */}
                  {weekDays.map((day) => {
                    const meal = getMeal(day.fullDay, mealType.name)

                    return (
                      <div
                        key={`${day.fullDay}-${mealType.name}`}
                        className="min-h-[190px] border-r border-slate-200 bg-white p-3 last:border-r-0"
                      >
                        {meal ? (
                          <div className="group relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">
                            <button
                              type="button"
                              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-lg text-slate-300 opacity-0 transition group-hover:opacity-100 hover:bg-slate-50 hover:text-slate-600"
                              aria-label={`Options pour ${meal.title}`}
                            >
                              <MoreVertical size={15} />
                            </button>

                            <div className="pr-5">
                              <p className="text-sm font-bold leading-5 text-slate-800">
                                {meal.title}
                              </p>

                              <div className="mt-2 flex items-center gap-1.5">
                                <span className="text-xs">
                                  {getSpaceIcon(meal.space)}
                                </span>

                                <span className="truncate text-xs font-medium text-slate-400">
                                  {meal.space}
                                </span>
                              </div>

                              {meal.note && (
                                <span className="mt-3 inline-flex rounded-full bg-indigo-50 px-2 py-1 text-[10px] font-semibold text-indigo-600">
                                  {meal.note}
                                </span>
                              )}
                            </div>
                          </div>
                        ) : (
                          <button
                            type="button"
                            className="flex min-h-[105px] w-full items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50 px-3 text-center transition hover:border-indigo-200 hover:bg-indigo-50/50"
                          >
                            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-400 transition hover:text-indigo-600">
                              <Plus size={14} />
                              Ajouter
                            </span>
                          </button>
                        )}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
