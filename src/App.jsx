import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React Basics", completed: false },
    { id: 2, title: "Understand Virtual DOM", completed: false },
  ]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
          <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
            📝 Mini Task Tracker
          </h1>
          <AddTask onAdd={addTask} />
          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </div>
      </div>
    </>
  );
}

export default App;
