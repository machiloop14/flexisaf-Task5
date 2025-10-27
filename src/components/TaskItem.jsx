import React from "react";
import styled from "styled-components";

// 🎨 Styled Components
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9fafb; /* Tailwind: bg-gray-50 */
  border: 1px solid #e5e7eb; /* border-gray-200 */
  border-radius: 0.375rem; /* rounded-md */
  padding: 0.5rem; /* p-2 */
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* hover:shadow-sm */
  }
`;

const TaskText = styled.span`
  flex: 1;
  cursor: pointer;
  color: ${(props) =>
    props.completed
      ? "#9ca3af"
      : "#1f2937"}; /* text-gray-400 / text-gray-800 */
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  transition: color 0.2s ease;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ef4444; /* Tailwind: text-red-500 */
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #b91c1c; /* Tailwind: hover:text-red-700 */
  }
`;

// 💡 Functional Component
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <ItemContainer>
      <TaskText completed={task.completed} onClick={() => onToggle(task.id)}>
        {task.title}
      </TaskText>
      <DeleteButton onClick={() => onDelete(task.id)}>✖</DeleteButton>
    </ItemContainer>
  );
}

export default TaskItem;
