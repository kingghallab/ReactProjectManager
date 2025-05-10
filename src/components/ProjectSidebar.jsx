export default function ProjectSidebar({ projectsState, addProject, selectProjectTrigger }) {
  return (
    <nav className="flex flex-col gap-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-bold text-white tracking-tight">Projects</h2>
        <button
          onClick={addProject}
          className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white rounded-full px-3 py-1.5 text-sm font-semibold shadow transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <span onClick={addProject} className="text-lg leading-none">+</span> New Project
        </button>
      </div>
      <div className="bg-stone-800 rounded-2xl p-4 shadow-inner">
        {projectsState.projects.length === 0 ? (
          <div className="text-stone-400 text-center py-8">No projects yet.</div>
        ) : (
          <ul className="space-y-2">
            {projectsState.projects.map((project) => (
              <li key={project.title}>
                <button
                onClick={() => selectProjectTrigger(project.id)}
                  className="w-full flex items-center gap-2 bg-stone-900 hover:bg-red-500 hover:text-white text-stone-200 rounded-lg py-2 px-4 font-medium shadow-sm transition-colors text-left group focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-red-400 group-hover:bg-white"></span>
                  <span className="truncate">{project.title}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
