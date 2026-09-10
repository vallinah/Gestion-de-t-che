import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  ListTodo,
  Wallet,
  Utensils,
  Users,
  Settings,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const mainNavigation = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Tâches',
    path: '/tasks',
    icon: ListTodo,
  },
  {
    name: 'Budget',
    path: '/budget',
    icon: Wallet,
  },
  {
    name: 'Repas',
    path: '/meals',
    icon: Utensils,
  },
  {
    name: 'Espaces',
    path: '/spaces',
    icon: Users,
  },
]

const secondaryNavigation = [
  {
    name: 'Paramètres',
    path: '/settings',
    icon: Settings,
  },
  {
    name: 'Profil',
    path: '/profile',
    icon: User,
  },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`flex h-screen shrink-0 flex-col border-r border-slate-200 bg-white transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Header / Logo */}
      <div
        className={`flex h-20 items-center border-b border-slate-100 ${
          collapsed ? 'justify-center px-3' : 'justify-between px-5'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
            <ListTodo size={21} strokeWidth={2.2} />
          </div>

          {!collapsed && (
            <div className="overflow-hidden whitespace-nowrap">
              <h1 className="text-base font-bold text-slate-900">
                Gestion de tâche
              </h1>
              <p className="text-xs text-slate-500">
                Votre espace organisé
              </p>
            </div>
          )}
        </div>

        {/* Bouton réduire */}
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className={`flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 ${
            collapsed ? 'absolute ml-16' : ''
          }`}
          aria-label={collapsed ? 'Afficher la sidebar' : 'Réduire la sidebar'}
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>
      </div>

      {/* Navigation principale */}
      <nav className="flex-1 px-3 py-5">
        {!collapsed && (
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Menu
          </p>
        )}

        <div className="space-y-1">
          {mainNavigation.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.path}
                to={item.path}
                title={collapsed ? item.name : undefined}
                className={({ isActive }) =>
                  `group flex items-center rounded-xl py-2.5 text-sm font-medium transition ${
                    collapsed
                      ? 'justify-center px-0'
                      : 'gap-3 px-3'
                  } ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={19}
                      strokeWidth={isActive ? 2.3 : 2}
                      className={
                        isActive
                          ? 'text-indigo-600'
                          : 'text-slate-400 group-hover:text-slate-600'
                      }
                    />

                    {!collapsed && <span>{item.name}</span>}
                  </>
                )}
              </NavLink>
            )
          })}
        </div>
      </nav>

      {/* Navigation secondaire */}
      <div className="border-t border-slate-100 px-3 py-4">
        <div className="space-y-1">
          {secondaryNavigation.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.path}
                to={item.path}
                title={collapsed ? item.name : undefined}
                className={({ isActive }) =>
                  `flex items-center rounded-xl py-2.5 text-sm font-medium transition ${
                    collapsed
                      ? 'justify-center px-0'
                      : 'gap-3 px-3'
                  } ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                <Icon size={19} />
                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            )
          })}

          <button
            type="button"
            title={collapsed ? 'Déconnexion' : undefined}
            className={`group flex w-full items-center rounded-xl py-2.5 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600 ${
              collapsed ? 'justify-center px-0' : 'gap-3 px-3'
            }`}
          >
            <LogOut
              size={19}
              className="text-slate-400 group-hover:text-red-500"
            />

            {!collapsed && <span>Déconnexion</span>}
          </button>
        </div>
      </div>
    </aside>
  )
}