import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-md p-2 hover:shadow-sm transition">
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer flex-1 ${
          task.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {task.title}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        ✖
      </button>
    </div>
  );
}

export default TaskItem;
