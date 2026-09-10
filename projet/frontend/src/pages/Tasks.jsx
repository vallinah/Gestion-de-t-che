import { useState } from "react";
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  Clock3,
  MoreVertical,
} from "lucide-react";

const spaces = [
  { name: "Tout", icon: "🌐" },
  { name: "Personnel", icon: "🔒" },
  { name: "Ma maison", icon: "🏠" },
  { name: "Travail", icon: "💼" },
];

const weekDays = [
  { day: "Lun.", fullDay: "Lundi", date: "8", month: "sept.", current: false },
  { day: "Mar.", fullDay: "Mardi", date: "9", month: "sept.", current: false },
  {
    day: "Mer.",
    fullDay: "Mercredi",
    date: "10",
    month: "sept.",
    current: true,
  },
  { day: "Jeu.", fullDay: "Jeudi", date: "11", month: "sept.", current: false },
  {
    day: "Ven.",
    fullDay: "Vendredi",
    date: "12",
    month: "sept.",
    current: false,
  },
  {
    day: "Sam.",
    fullDay: "Samedi",
    date: "13",
    month: "sept.",
    current: false,
  },
  {
    day: "Dim.",
    fullDay: "Dimanche",
    date: "14",
    month: "sept.",
    current: false,
  },
];

const initialTasks = [
  {
    id: 1,
    title: "Faire les courses",
    day: "Lundi",
    space: "Ma maison",
    priority: "Haute",
    time: "17:00",
    completed: false,
  },
  {
    id: 2,
    title: "Répondre aux emails",
    day: "Lundi",
    space: "Travail",
    priority: "Moyenne",
    time: null,
    completed: true,
  },
  {
    id: 3,
    title: "Faire du sport",
    day: "Mardi",
    space: "Personnel",
    priority: "Basse",
    time: "19:00",
    completed: false,
  },
  {
    id: 4,
    title: "Préparer le rapport",
    day: "Mardi",
    space: "Travail",
    priority: "Haute",
    time: "14:00",
    completed: false,
  },
  {
    id: 5,
    title: "Nettoyer la maison",
    day: "Mercredi",
    space: "Ma maison",
    priority: "Moyenne",
    time: null,
    completed: false,
  },
  {
    id: 6,
    title: "Lire 30 minutes",
    day: "Jeudi",
    space: "Personnel",
    priority: "Basse",
    time: "20:00",
    completed: false,
  },
  {
    id: 7,
    title: "Réunion équipe",
    day: "Jeudi",
    space: "Travail",
    priority: "Haute",
    time: "10:00",
    completed: false,
  },
  {
    id: 8,
    title: "Préparer le dîner",
    day: "Vendredi",
    space: "Ma maison",
    priority: "Moyenne",
    time: "18:30",
    completed: true,
  },
  {
    id: 9,
    title: "Avancer sur le projet",
    day: "Vendredi",
    space: "Travail",
    priority: "Haute",
    time: null,
    completed: true,
  },
  {
    id: 10,
    title: "Faire du sport",
    day: "Samedi",
    space: "Personnel",
    priority: "Basse",
    time: "09:00",
    completed: false,
  },
  {
    id: 11,
    title: "Ranger la chambre",
    day: "Dimanche",
    space: "Ma maison",
    priority: "Moyenne",
    time: null,
    completed: true,
  },
  {
    id: 12,
    title: "Planifier la semaine",
    day: "Dimanche",
    space: "Personnel",
    priority: "Moyenne",
    time: "18:00",
    completed: false,
  },
];

function getPriorityClasses(priority) {
  switch (priority) {
    case "Haute":
      return "bg-red-500";
    case "Moyenne":
      return "bg-amber-500";
    case "Basse":
      return "bg-emerald-500";
    default:
      return "bg-slate-300";
  }
}

function getPriorityTextClasses(priority) {
  switch (priority) {
    case "Haute":
      return "text-red-600";
    case "Moyenne":
      return "text-amber-600";
    case "Basse":
      return "text-emerald-600";
    default:
      return "text-slate-500";
  }
}

function getSpaceIcon(space) {
  const currentSpace = spaces.find((item) => item.name === space);
  return currentSpace?.icon || "🌐";
}

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedSpace, setSelectedSpace] = useState("Tout");
  const [spaceMenuOpen, setSpaceMenuOpen] = useState(false);

  const toggleTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getTasksForDay = (day) => {
    return tasks.filter((task) => {
      const matchesDay = task.day === day;
      const matchesSpace =
        selectedSpace === "Tout" || task.space === selectedSpace;

      return matchesDay && matchesSpace;
    });
  };

  const filteredTasks = tasks.filter(
    (task) => selectedSpace === "Tout" || task.space === selectedSpace
  );

  const totalTasks = filteredTasks.length;
  const completedTasks = filteredTasks.filter((task) => task.completed).length;

  const progress =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-50">
      {" "}
      <header className="sticky top-0 z-20 h-20 border-b border-slate-200 bg-white">
        {" "}
        <div className="flex h-full items-center justify-between px-6 lg:px-8">
          {" "}
          <div>
            {" "}
            <h1 className="text-2xl font-bold text-slate-900">Tâches</h1>{" "}
            <p className="mt-1 text-sm text-slate-500">
              Organisez votre semaine et gardez une vue claire de vos priorités.{" "}
            </p>{" "}
          </div>
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Nouvelle tâche</span>
          </button>
        </div>
      </header>
      <main className="px-6 py-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
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
                  spaceMenuOpen ? "rotate-180" : ""
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
                      setSelectedSpace(space.name);
                      setSpaceMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                      selectedSpace === space.name
                        ? "bg-indigo-50 font-medium text-indigo-600"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{space.icon}</span>
                    {space.name}
                  </button>
                ))}
              </div>
            )}
          </div>

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

        <section className="mt-5 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Semaine du 8 au 14 septembre 2026
              </p>

              <p className="mt-1 text-sm text-slate-500">
                <span className="font-semibold text-slate-700">
                  {completedTasks} / {totalTasks}
                </span>{" "}
                tâche{totalTasks > 1 ? "s" : ""} terminée
                {completedTasks > 1 ? "s" : ""}
              </p>
            </div>

            <span className="shrink-0 text-sm font-semibold text-indigo-600">
              {progress}%
            </span>
          </div>

          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-indigo-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <div className="grid min-w-[1120px] grid-cols-7 divide-x divide-slate-200">
              {weekDays.map((day) => {
                const dayTasks = getTasksForDay(day.fullDay);

                return (
                  <div
                    key={day.fullDay}
                    className="flex min-h-[560px] flex-col"
                  >
                    {/* En-tête du jour */}
                    <div
                      className={`relative border-b-2 px-4 py-4 ${
                        day.current
                          ? "border-indigo-300 bg-indigo-50"
                          : "border-slate-200 bg-slate-100/70"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p
                            className={`text-base font-bold tracking-tight ${
                              day.current ? "text-indigo-600" : "text-slate-800"
                            }`}
                          >
                            {day.day} {day.date} {day.month}
                          </p>

                          <p
                            className={`mt-1 text-xs font-medium ${
                              day.current ? "text-indigo-400" : "text-slate-400"
                            }`}
                          >
                            {dayTasks.length}{" "}
                            {dayTasks.length > 1 ? "tâches" : "tâche"}
                          </p>
                        </div>

                        {day.current && (
                          <span className="rounded-full bg-indigo-100 px-2 py-1 text-[10px] font-semibold text-indigo-600">
                            Aujourd'hui
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Zone des tâches */}
                    <div className="flex flex-1 flex-col bg-slate-50/40 p-3">
                      <div className="flex-1 space-y-2.5">
                        {dayTasks.length > 0 ? (
                          dayTasks.map((task) => (
                            <div
                              key={task.id}
                              className={`group rounded-xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                                task.completed
                                  ? "border-slate-100"
                                  : "border-slate-200"
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <button
                                  type="button"
                                  onClick={() => toggleTask(task.id)}
                                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
                                    task.completed
                                      ? "border-indigo-500 bg-indigo-500 text-white"
                                      : "border-slate-300 hover:border-indigo-400"
                                  }`}
                                  aria-label={
                                    task.completed
                                      ? "Marquer comme non terminée"
                                      : "Marquer comme terminée"
                                  }
                                >
                                  {task.completed && <Check size={11} />}
                                </button>

                                <div className="min-w-0 flex-1">
                                  <p
                                    className={`pr-1 text-sm font-bold leading-5 ${
                                      task.completed
                                        ? "text-slate-400 line-through"
                                        : "text-slate-800"
                                    }`}
                                  >
                                    {task.title}
                                  </p>

                                  <div className="mt-2 flex items-center gap-1.5">
                                    <span className="text-xs">
                                      {getSpaceIcon(task.space)}
                                    </span>

                                    <span className="truncate text-xs font-medium text-slate-400">
                                      {task.space}
                                    </span>
                                  </div>

                                  <div className="mt-3 flex items-center justify-between gap-2">
                                    <span
                                      className={`flex items-center gap-1.5 text-[11px] font-semibold ${getPriorityTextClasses(
                                        task.priority
                                      )}`}
                                    >
                                      <span
                                        className={`h-2 w-2 rounded-full ${getPriorityClasses(
                                          task.priority
                                        )}`}
                                      />
                                      {task.priority}
                                    </span>

                                    {task.time && (
                                      <span className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                                        <Clock3 size={12} />
                                        {task.time}
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-300 opacity-0 transition group-hover:opacity-100 hover:bg-slate-50 hover:text-slate-600"
                                  aria-label={`Options pour ${task.title}`}
                                >
                                  <MoreVertical size={15} />
                                </button>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="flex min-h-24 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-white/70 px-3 text-center">
                            <p className="text-xs text-slate-400">
                              Aucune tâche prévue
                            </p>
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-slate-200 bg-white px-2 py-2.5 text-xs font-medium text-slate-400 transition hover:border-indigo-200 hover:bg-indigo-50/50 hover:text-indigo-600"
                      >
                        <Plus size={14} />
                        Ajouter
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
