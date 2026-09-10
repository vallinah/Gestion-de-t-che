import {
  Camera,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  KeyRound,
  LogOut,
  Mail,
  Phone,
  Shield,
  Trash2,
  User,
  Utensils,
  Users,
} from 'lucide-react'

export default function Profile() {
  const user = {
    name: 'Otisoa Vallinah',
    email: 'otisoa@example.com',
    phone: '+261 34 00 000 00',
    initials: 'OV',
    memberSince: 'Septembre 2026',
  }

  const statistics = [
    {
      label: 'Tâches créées',
      value: '24',
      icon: CheckCircle2,
    },
    {
      label: 'Espaces',
      value: '2',
      icon: Users,
    },
    {
      label: 'Repas planifiés',
      value: '18',
      icon: Utensils,
    },
    {
      label: 'Dépenses',
      value: '12',
      icon: CircleDollarSign,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 h-20 border-b border-slate-200 bg-white">
        <div className="flex h-full items-center px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Profil</h1>
            <p className="mt-1 text-sm text-slate-500">
              Gérez vos informations personnelles et votre compte.
            </p>
          </div>
        </div>
      </header>

      <main className="px-6 py-6 lg:px-8">
        <div className="space-y-6">
          {/* Profile header */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="h-28 bg-gradient-to-r from-indigo-500 to-violet-500" />

            <div className="px-5 pb-6">
              <div className="-mt-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">
                  <div className="relative">
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-indigo-100 text-2xl font-bold text-indigo-700 shadow-sm">
                      {user.initials}
                    </div>

                    <button
                      type="button"
                      title="Modifier la photo"
                      className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-white shadow-sm transition hover:bg-indigo-700"
                    >
                      <Camera size={16} />
                    </button>
                  </div>

                  <div className="pb-1">
                    <h2 className="text-xl font-bold text-slate-900">
                      {user.name}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {user.email}
                    </p>

                    <p className="mt-2 text-xs text-slate-400">
                      Membre depuis {user.memberSince}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                >
                  <User size={17} />
                  Modifier le profil
                </button>
              </div>
            </div>
          </section>

          {/* Personal information */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <User size={18} />
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    Informations personnelles
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Les informations associées à votre compte.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 p-5 sm:grid-cols-2">
              <InfoItem
                icon={User}
                label="Nom"
                value={user.name}
              />

              <InfoItem
                icon={Mail}
                label="Adresse email"
                value={user.email}
              />

              <InfoItem
                icon={Phone}
                label="Téléphone"
                value={user.phone}
              />
            </div>
          </section>

          {/* Activity */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    Votre activité
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Un aperçu de votre utilisation de l'application.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-2 xl:grid-cols-4">
              {statistics.map((stat) => {
                const Icon = stat.icon

                return (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-100 bg-slate-50/60 p-4"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm">
                      <Icon size={18} />
                    </div>

                    <p className="mt-4 text-2xl font-bold text-slate-900">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Security */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Shield size={18} />
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">Sécurité</h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Gérez la sécurité de votre compte.
                  </p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              <button
                type="button"
                className="group flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600">
                  <KeyRound size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-medium text-slate-800">
                    Modifier le mot de passe
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Mettez à jour le mot de passe de votre compte.
                  </p>
                </div>

                <ChevronRight
                  size={18}
                  className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-indigo-500"
                />
              </button>
            </div>
          </section>

          {/* Account actions */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <User size={18} />
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    Compte
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    Actions concernant votre compte.
                  </p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              <button
                type="button"
                className="group flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500 group-hover:bg-red-50 group-hover:text-red-600">
                  <LogOut size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-medium text-slate-800">
                    Déconnexion
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Se déconnecter de ce compte.
                  </p>
                </div>

                <ChevronRight
                  size={18}
                  className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-red-500"
                />
              </button>
            </div>
          </section>

          {/* Danger zone */}
          <section className="overflow-hidden rounded-2xl border border-red-200 bg-white shadow-sm">
            <div className="border-b border-red-100 bg-red-50/50 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <Trash2 size={18} />
                </div>

                <div>
                  <h2 className="font-semibold text-slate-900">
                    Zone dangereuse
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Cette action est définitive.
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
                  La suppression de votre compte supprimera définitivement
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

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
      <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
        <Icon size={15} />
        {label}
      </div>

      <p className="mt-2 text-sm font-semibold text-slate-800">
        {value}
      </p>
    </div>
  )
}
