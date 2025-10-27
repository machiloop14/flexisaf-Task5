import React from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";

// 🎨 Styled Components
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* Tailwind: space-y-2 */
`;

const EmptyText = styled.p`
  color: #6b7280; /* Tailwind: text-gray-500 */
  text-align: center;
  font-size: 0.95rem;
`;

// 💡 Functional Component
function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ListContainer>
      {tasks.length === 0 ? (
        <EmptyText>No tasks yet</EmptyText>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </ListContainer>
  );
}

export default TaskList;
