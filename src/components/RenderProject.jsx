import { useRef } from "react";
import Input from "./Input";
export default function RenderProject({
  projectDetails,
  triggerDelete,
  addTaskTrigger,
  clearProject
}) {
  const newTask = useRef();

  return (
    <div className="bg-stone-900 rounded-lg shadow-md p-8 max-w-xl w-full text-white">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-white">
          {projectDetails.title}
        </h2>
        <button
          onClick={() => clearProject(projectDetails.id)}
          className="ml-4 bg-red-600 hover:bg-red-700 text-white rounded px-4 py-2 text-sm font-semibold transition-colors shadow"
        >
          Delete
        </button>
      </div>
      <p className="text-gray-400 mb-1">
        Due: <span className="font-medium text-gray-200">{projectDetails.dueDate}</span>
      </p>
      <p className="mb-4 text-gray-300">{projectDetails.description}</p>
      <hr className="my-4 border-stone-700" />
      <h3 className="text-lg font-semibold mb-2 text-gray-200">Tasks</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTaskTrigger(newTask.current.value);
          newTask.current.value = "";
        }}
      >
        <div className="flex gap-2">
          <input
            required
            ref={newTask}
            type="text"
            name="tasks"
            className="flex-1 bg-stone-800 text-white border border-stone-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
            placeholder="Add a new task..."
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2 font-semibold shadow transition-colors"
          >
            Add Task
          </button>
        </div>
      </form>
      <ul className="list-disc list-inside space-y-1 mb-4 mt-2">
        {projectDetails.tasks.map((task) => (
          <li key={task.id} className="text-gray-200 flex items-center justify-between">
            <span>{task.description}</span>
            <button
              onClick={() => triggerDelete(task.id)}
              className="ml-4 bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1 text-xs font-medium transition-colors"
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
