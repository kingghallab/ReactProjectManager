import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import CreateProject from "./components/CreateProject";
import RenderProject from "./components/RenderProject";
import { useState } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "Create a personal portfolio to showcase my work.",
    dueDate: "15.07.2024",
    tasks: [
      { description: "Design layout", id: Math.random() },
      { description: "Write content", id: Math.random() },
      { description: "Deploy site", id: Math.random() },
    ],
    id: 1,
  },
  {
    title: "E-commerce App",
    description: "Develop a simple e-commerce application.",
    dueDate: "01.08.2024",
    tasks: [
      { description: "Set up backend", id: Math.random() },
      { description: "Create product pages", id: Math.random() },
      { description: "Integrate payment gateway", id: Math.random() },
    ],
    id: 2,
  },
  {
    title: "Blog Platform",
    description: "Build a platform for blogging with user authentication.",
    dueDate: "20.07.2024",
    tasks: [
      { description: "User login", id: Math.random() },
      { description: "Post editor", id: Math.random() },
      { description: "Comment system", id: Math.random() },
    ],
    id: 3,
  },
  {
    title: "Weather Dashboard",
    description: "A dashboard to display weather information using an API.",
    dueDate: "10.07.2024",
    tasks: [
      { description: "API integration", id: Math.random() },
      { description: "UI design", id: Math.random() },
      { description: "Testing", id: Math.random() },
    ],
    id: 4,
  },
  {
    title: "Task Manager",
    description: "Create a task management tool with drag-and-drop features.",
    dueDate: "25.07.2024",
    tasks: [
      { description: "Task CRUD", id: Math.random() },
      { description: "Drag-and-drop", id: Math.random() },
      { description: "Notifications", id: Math.random() },
    ],
    id: 5,
  },
];

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    creatingProject: false,
    projects: projects,
  });

  function selectProjectTrigger(projectId) {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: projectId };
    });
    setProjectsState((prevState) => {
      return { ...prevState, creatingProject: false };
    });
  }

  function createNewProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = { ...projectData, id: Math.random() };
      return { ...prevState, projects: [...prevState.projects, newProject] };
    });
  }

  function addTask(task) {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          // Add task as an object with id and description
          const newTask = { id: Math.random(), description: task };
          return { ...project, tasks: [...project.tasks, newTask] };
        }
        return project;
      });
      return { ...prevState, projects: updatedProjects };
    });
  }

  function deleteTask(taskId) {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectId) {
          const newTasks = project.tasks.filter((task) => task.id !== taskId);
          return { ...project, tasks: newTasks };
        }
        return project;
      });
      return { ...prevState, projects: updatedProjects };
    });
  }
  function clearProject() {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      );
      return { ...prevState, projects: updatedProjects };
    });
  }

  let renderContent;
  if (projectsState.selectedProjectId && !projectsState.creatingProject) {
    const selectedProject = projectsState.projects.find(
      (p) => p.id === projectsState.selectedProjectId
    );
    selectedProject
      ? (renderContent = (
          <RenderProject
            projectDetails={selectedProject}
            addTaskTrigger={addTask}
            triggerDelete={deleteTask}
            clearProject={clearProject}
          />
        ))
      : (renderContent = <p style={{color:"white"}}>Please Select Another Project or Create a new project!</p>);
  } else if (projectsState.creatingProject) {
    renderContent = (
      <CreateProject
        doCancelCreation={() =>
          setProjectsState((prevState) => {
            return { ...prevState, creatingProject: false };
          })
        }
        doSave={createNewProject}
      />
    );
  } else {
    renderContent = (
      <NoProjectSelected
        onCreateProject={() =>
          setProjectsState((prevState) => {
            return { ...prevState, creatingProject: true };
          })
        }
      />
    );
  }


  
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-900 via-gray-900 to-black flex flex-col md:flex-row">
      <aside className="w-full md:w-1/4 bg-black p-6 flex-shrink-0">
        <ProjectSidebar
          addProject={() =>
            setProjectsState((prevState) => {
              return { ...prevState, creatingProject: true };
            })
          }
          projectsState={projectsState}
          selectProjectTrigger={selectProjectTrigger}
        />
      </aside>
      <section className="flex-1 flex items-center justify-center p-6 bg-transparent">
        {renderContent}
      </section>
    </main>
  );
}

export default App;
