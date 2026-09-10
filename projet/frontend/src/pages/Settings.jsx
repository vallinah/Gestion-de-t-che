import { useState } from 'react'
import {
  Bell,
  CalendarDays,
  ChevronRight,
  Clock3,
  Globe,
  LockKeyhole,
  Monitor,
  Moon,
  Palette,
  ShieldAlert,
  Sun,
  User,
} from 'lucide-react'

export default function Settings() {
  const [taskNotifications, setTaskNotifications] = useState(true)
  const [mealReminders, setMealReminders] = useState(true)
  const [budgetNotifications, setBudgetNotifications] = useState(false)

  const [theme, setTheme] = useState('system')
  const [language, setLanguage] = useState('fr')
  const [weekStart, setWeekStart] = useState('monday')
  const [timeFormat, setTimeFormat] = useState('24h')

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 h-20 border-b border-slate-200 bg-white">
        <div className="flex h-full items-center px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Paramètres
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Gérez vos préférences et les paramètres de votre compte.
            </p>
          </div>
        </div>
      </header>

      <main className="px-6 py-6 lg:px-8">
        <div className="space-y-6">
          {/* Compte */}
          <SettingsSection
            icon={User}
            title="Compte"
            description="Gérez vos informations personnelles et votre sécurité."
          >
            <SettingsLink
              icon={User}
              title="Informations personnelles"
              description="Modifiez votre nom, votre adresse email et vos informations."
            />

            <SettingsLink
              icon={LockKeyhole}
              title="Mot de passe"
              description="Modifiez votre mot de passe et sécurisez votre compte."
            />
          </SettingsSection>

          {/* Notifications */}
          <SettingsSection
            icon={Bell}
            title="Notifications"
            description="Choisissez les notifications que vous souhaitez recevoir."
          >
            <ToggleSetting
              title="Notifications des tâches"
              description="Recevoir les rappels et les changements liés aux tâches."
              enabled={taskNotifications}
              onChange={setTaskNotifications}
            />

            <ToggleSetting
              title="Rappels de repas"
              description="Recevoir des rappels concernant les repas planifiés."
              enabled={mealReminders}
              onChange={setMealReminders}
            />

            <ToggleSetting
              title="Notifications du budget"
              description="Recevoir des alertes concernant votre budget et vos dépenses."
              enabled={budgetNotifications}
              onChange={setBudgetNotifications}
            />
          </SettingsSection>

          {/* Apparence */}
          <SettingsSection
            icon={Palette}
            title="Apparence"
            description="Personnalisez l'apparence de l'application."
          >
            <div className="px-5 py-5">
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                  <Palette size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Thème
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Choisissez l'apparence de l'application.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <ThemeOption
                  value="light"
                  selected={theme === 'light'}
                  icon={Sun}
                  label="Clair"
                  onClick={() => setTheme('light')}
                />

                <ThemeOption
                  value="dark"
                  selected={theme === 'dark'}
                  icon={Moon}
                  label="Sombre"
                  onClick={() => setTheme('dark')}
                />

                <ThemeOption
                  value="system"
                  selected={theme === 'system'}
                  icon={Monitor}
                  label="Système"
                  onClick={() => setTheme('system')}
                />
              </div>
            </div>

            <SelectSetting
              icon={Globe}
              title="Langue"
              description="Choisissez la langue de l'application."
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              options={[
                { value: 'fr', label: 'Français' },
                { value: 'en', label: 'English' },
              ]}
            />
          </SettingsSection>

          {/* Préférences */}
          <SettingsSection
            icon={CalendarDays}
            title="Préférences"
            description="Configurez vos préférences d'organisation."
          >
            <SelectSetting
              icon={CalendarDays}
              title="Premier jour de la semaine"
              description="Déterminez le jour utilisé pour organiser vos semaines."
              value={weekStart}
              onChange={(event) => setWeekStart(event.target.value)}
              options={[
                { value: 'monday', label: 'Lundi' },
                { value: 'sunday', label: 'Dimanche' },
              ]}
            />

            <SelectSetting
              icon={Clock3}
              title="Format de l'heure"
              description="Choisissez le format utilisé pour afficher les heures."
              value={timeFormat}
              onChange={(event) => setTimeFormat(event.target.value)}
              options={[
                { value: '24h', label: '24 heures' },
                { value: '12h', label: '12 heures' },
              ]}
            />
          </SettingsSection>

          {/* Zone dangereuse */}
          <section className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
            <div className="border-b border-red-100 bg-red-50/50 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <ShieldAlert size={18} />
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    Zone dangereuse
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Ces actions peuvent avoir des conséquences définitives.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4 px-5 py-5 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  Supprimer mon compte
                </h3>

                <p className="mt-1 max-w-xl text-xs leading-5 text-slate-400">
                  La suppression de votre compte est définitive et supprimera
                  vos données personnelles.
                </p>
              </div>

              <button
                type="button"
                className="shrink-0 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                Supprimer mon compte
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

/* --------------------------------
   Section principale
-------------------------------- */

function SettingsSection({ icon: Icon, title, description, children }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <Icon size={18} />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900">{title}</h2>
            <p className="mt-1 text-xs text-slate-400">{description}</p>
          </div>
        </div>
      </div>

      <div className="divide-y divide-slate-100">{children}</div>
    </section>
  )
}

/* --------------------------------
   Lien de paramètre
-------------------------------- */

function SettingsLink({ icon: Icon, title, description }) {
  return (
    <button
      type="button"
      className="group flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition group-hover:bg-indigo-50 group-hover:text-indigo-600">
        <Icon size={18} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-medium text-slate-800">{title}</h3>
        <p className="mt-1 text-xs text-slate-400">{description}</p>
      </div>

      <ChevronRight
        size={18}
        className="shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-indigo-500"
      />
    </button>
  )
}

/* --------------------------------
   Switch
-------------------------------- */

function ToggleSetting({
  title,
  description,
  enabled,
  onChange,
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-4">
      <div className="min-w-0">
        <h3 className="text-sm font-medium text-slate-800">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-slate-400">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onChange(!enabled)}
        aria-pressed={enabled}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled ? 'bg-indigo-600' : 'bg-slate-200'
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
            enabled ? 'left-6' : 'left-1'
          }`}
        />
      </button>
    </div>
  )
}

/* --------------------------------
   Select
-------------------------------- */

function SelectSetting({
  icon: Icon,
  title,
  description,
  value,
  onChange,
  options,
}) {
  return (
    <div className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
          <Icon size={18} />
        </div>

        <div>
          <h3 className="text-sm font-medium text-slate-800">{title}</h3>
          <p className="mt-1 text-xs leading-5 text-slate-400">
            {description}
          </p>
        </div>
      </div>

      <select
        value={value}
        onChange={onChange}
        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

/* --------------------------------
   Option de thème
-------------------------------- */

function ThemeOption({
  selected,
  icon: Icon,
  label,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${
        selected
          ? 'border-indigo-300 bg-indigo-50 text-indigo-700'
          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
      }`}
    >
      <Icon size={18} />

      <span className="text-sm font-medium">{label}</span>

      {selected && (
        <span className="ml-auto h-2 w-2 rounded-full bg-indigo-600" />
      )}
    </button>
  )
}
