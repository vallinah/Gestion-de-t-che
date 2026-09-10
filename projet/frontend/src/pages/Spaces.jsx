import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, MoreVertical, Users, Settings, X } from "lucide-react";

const initialSpaces = [
  {
    id: 1,
    name: "Personnel",
    description: "Votre espace privé",
    icon: "🔒",
    type: "Personnel",
    members: [
      {
        name: "Vous",
        role: "Propriétaire",
        initials: "V",
      },
    ],
    private: true,
  },
  {
    id: 2,
    name: "Ma maison",
    description: "Organisation du foyer",
    icon: "🏠",
    type: "Partagé",
    members: [
      {
        name: "Vous",
        role: "Propriétaire",
        initials: "V",
      },
      {
        name: "Marie",
        role: "Membre",
        initials: "M",
      },
      {
        name: "Jean",
        role: "Membre",
        initials: "J",
      },
    ],
    private: false,
  },
  {
    id: 3,
    name: "Travail",
    description: "Mes projets professionnels",
    icon: "💼",
    type: "Partagé",
    members: [
      {
        name: "Vous",
        role: "Propriétaire",
        initials: "V",
      },
      {
        name: "Paul",
        role: "Membre",
        initials: "P",
      },
    ],
    private: false,
  },
];

export default function Spaces() {
  const [spaces, setSpaces] = useState(initialSpaces);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const [newSpace, setNewSpace] = useState({
    name: "",
    description: "",
    icon: "🏠",
    type: "Partagé",
  });

  const handleCreateSpace = (event) => {
    event.preventDefault();

    if (!newSpace.name.trim()) {
      return;
    }

    const space = {
      id: Date.now(),
      name: newSpace.name.trim(),
      description: newSpace.description.trim() || "Nouvel espace",
      icon: newSpace.icon,
      type: newSpace.type,
      members: [
        {
          name: "Vous",
          role: "Propriétaire",
          initials: "V",
        },
      ],
      private: newSpace.type === "Personnel",
    };

    setSpaces((currentSpaces) => [...currentSpaces, space]);

    setNewSpace({
      name: "",
      description: "",
      icon: "🏠",
      type: "Partagé",
    });

    setShowCreateModal(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-20 h-20 border-b border-slate-200 bg-white">
        <div className="flex h-full items-center justify-between px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Espaces</h1>

            <p className="mt-1 text-sm text-slate-500">
              Gérez vos espaces et les personnes avec qui vous partagez vos
              données.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Plus size={18} />

            <span className="hidden sm:inline">Nouvel espace</span>
          </button>
        </div>
      </header>

      <main className="px-6 py-6 lg:px-8">
        {/* Section introduction */}
        <div className="mb-5">
          <h2 className="text-sm font-semibold text-slate-800">
            Tous les espaces
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Retrouvez ici vos espaces personnels et partagés.
          </p>
        </div>

        {/* Liste des espaces */}
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {spaces.map((space) => (
            <article
              key={space.id}
              className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
            >
              {/* Menu */}
              <div className="absolute right-4 top-4">
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu(openMenu === space.id ? null : space.id)
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label={`Options pour ${space.name}`}
                >
                  <MoreVertical size={18} />
                </button>

                {openMenu === space.id && (
                  <div className="absolute right-0 top-10 z-10 w-40 overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
                    <Link
                      to={`/spaces/${space.id}`}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                    >
                      Gérer
                    </Link>
                  </div>
                )}
              </div>

              {/* Icône + informations */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                  {space.icon}
                </div>

                <div className="min-w-0 pr-8">
                  <h3 className="truncate text-base font-bold text-slate-900">
                    {space.name}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                    {space.description}
                  </p>
                </div>
              </div>

              {/* Type */}
              <div className="mt-5">
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    space.private
                      ? "bg-slate-100 text-slate-600"
                      : "bg-indigo-50 text-indigo-600"
                  }`}
                >
                  {space.private ? "Espace privé" : "Espace partagé"}
                </span>
              </div>

              {/* Membres */}
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {space.members.slice(0, 4).map((member) => (
                      <div
                        key={member.name}
                        title={member.name}
                        className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-semibold text-slate-600"
                      >
                        {member.initials}
                      </div>
                    ))}
                  </div>

                  <span className="ml-3 text-xs font-medium text-slate-500">
                    {space.members.length}{" "}
                    {space.members.length > 1 ? "membres" : "membre"}
                  </span>
                </div>

                <Link
                  to={`/spaces/${space.id}`}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Gérer
                </Link>
              </div>
            </article>
          ))}

          {/* Carte de création */}
          <button
            type="button"
            onClick={() => setShowCreateModal(true)}
            className="flex min-h-[250px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-5 text-center transition hover:border-indigo-300 hover:bg-indigo-50/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Plus size={22} />
            </div>

            <p className="mt-4 text-sm font-bold text-slate-700">
              Créer un espace
            </p>

            <p className="mt-1 max-w-[220px] text-xs leading-5 text-slate-400">
              Organisez un nouveau contexte personnel ou partagé.
            </p>
          </button>
        </section>
      </main>

      {/* Modal création */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Créer un espace
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Créez un nouvel espace pour organiser vos données.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleCreateSpace} className="space-y-5 p-6">
              {/* Nom */}
              <div>
                <label
                  htmlFor="space-name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nom
                </label>

                <input
                  id="space-name"
                  type="text"
                  value={newSpace.name}
                  onChange={(event) =>
                    setNewSpace({
                      ...newSpace,
                      name: event.target.value,
                    })
                  }
                  placeholder="Ex. Ma maison"
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="space-description"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Description
                </label>

                <textarea
                  id="space-description"
                  rows="3"
                  value={newSpace.description}
                  onChange={(event) =>
                    setNewSpace({
                      ...newSpace,
                      description: event.target.value,
                    })
                  }
                  placeholder="À quoi servira cet espace ?"
                  className="w-full resize-none rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Icône */}
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">
                  Icône
                </p>

                <div className="flex gap-2">
                  {["🏠", "💼", "👥", "📚", "🎯"].map((icon) => (
                    <button
                      key={icon}
                      type="button"
                      onClick={() =>
                        setNewSpace({
                          ...newSpace,
                          icon,
                        })
                      }
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border text-lg transition ${
                        newSpace.icon === icon
                          ? "border-indigo-500 bg-indigo-50"
                          : "border-slate-200 bg-white hover:border-indigo-200"
                      }`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type */}
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-700">
                  Type
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setNewSpace({
                        ...newSpace,
                        type: "Personnel",
                      })
                    }
                    className={`rounded-xl border px-3 py-3 text-left transition ${
                      newSpace.type === "Personnel"
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-slate-200 hover:border-indigo-200"
                    }`}
                  >
                    <p className="text-sm font-semibold text-slate-800">
                      🔒 Personnel
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">
                      Visible uniquement par vous
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setNewSpace({
                        ...newSpace,
                        type: "Partagé",
                      })
                    }
                    className={`rounded-xl border px-3 py-3 text-left transition ${
                      newSpace.type === "Partagé"
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-slate-200 hover:border-indigo-200"
                    }`}
                  >
                    <p className="text-sm font-semibold text-slate-800">
                      👥 Partagé
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">
                      Peut être partagé avec d'autres
                    </p>
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
                >
                  Annuler
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                >
                  Créer l'espace
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal gestion espace */}
      {selectedSpace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                  {selectedSpace.icon}
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {selectedSpace.name}
                  </h2>

                  <p className="text-xs text-slate-500">
                    {selectedSpace.description}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSpace(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Membres */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-800">Membres</h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Personnes ayant accès à cet espace.
                  </p>
                </div>

                {!selectedSpace.private && (
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-100"
                  >
                    <Plus size={14} />
                    Inviter
                  </button>
                )}
              </div>

              <div className="mt-5 divide-y divide-slate-100 rounded-xl border border-slate-200">
                {selectedSpace.members.map((member) => (
                  <div
                    key={member.name}
                    className="flex items-center justify-between px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                        {member.initials}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          {member.name}
                        </p>

                        <p className="text-xs text-slate-400">{member.role}</p>
                      </div>
                    </div>

                    {member.role === "Propriétaire" && (
                      <span className="rounded-full bg-indigo-50 px-2 py-1 text-[10px] font-semibold text-indigo-600">
                        Propriétaire
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Permissions — aperçu pour la V1 */}
              <div className="mt-6">
                <h3 className="text-sm font-bold text-slate-800">Accès</h3>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-slate-50 px-3 py-3 text-center">
                    <p className="text-xs font-semibold text-slate-700">
                      Tâches
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">Autorisé</p>
                  </div>

                  <div className="rounded-xl bg-slate-50 px-3 py-3 text-center">
                    <p className="text-xs font-semibold text-slate-700">
                      Budget
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">Autorisé</p>
                  </div>

                  <div className="rounded-xl bg-slate-50 px-3 py-3 text-center">
                    <p className="text-xs font-semibold text-slate-700">
                      Repas
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">Autorisé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end border-t border-slate-100 px-6 py-4">
              <button
                type="button"
                onClick={() => setSelectedSpace(null)}
                className="rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
