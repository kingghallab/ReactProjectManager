import NoteImg from "../assets/no-projects.png";
export default function NoProjectSelected({ onCreateProject }) {
  return (
    <div className="bg-stone-900 rounded-xl shadow-md max-w-md mx-auto p-8 flex flex-col items-center text-center gap-4 border border-stone-800">
      <img
        src={NoteImg}
        alt="Note image"
        className="w-24 h-24 object-contain mb-4 opacity-80"
      />
      <h2 className="text-xl font-bold text-gray-100">No Project Selected</h2>
      <p className="text-gray-400 mb-2">
        Select a project or get started with a new one
      </p>
      <button
        onClick={onCreateProject}
        className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-6 py-2 font-semibold shadow transition-colors"
      >
        Create New Project
      </button>
    </div>
  );
}
