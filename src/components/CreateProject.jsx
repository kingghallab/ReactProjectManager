import { useRef } from "react";
import Input from "./Input.jsx";
export default function CreateProject({ doCancelCreation, doSave }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  function handleSave() {
    const objectStructure = {
      title: title.current.value,
      description: description.current.value,
      dueDate: date.current.value,
      tasks: [],
    };
    doSave(objectStructure);
    doCancelCreation();
  }
  return (
    <div className="bg-stone-800 rounded-2xl p-8 shadow-inner w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold text-white mb-6">Create New Project</h2>
      <form onSubmit={handleSave} className="flex flex-col gap-4">
        <Input ref={title} type="text" name="Title"></Input>
        <Input
          ref={description}
          type="text"
          name="Description"
          textarea
        ></Input>
        <Input ref={date} type="date" name="Due Date"></Input>
        <div className="flex gap-4 mt-6">
          <button
            onClick={doCancelCreation}
            type="button"
            className="flex-1 bg-stone-700 hover:bg-stone-600 text-white rounded-md px-4 py-2 font-semibold shadow transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 font-semibold shadow transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
