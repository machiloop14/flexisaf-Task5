import React, { useState } from "react";
import styled from "styled-components";

// 🎨 Styled Components
const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  flex: 1;
  border: 1px solid #d1d5db; /* Tailwind: border-gray-300 */
  border-radius: 0.375rem; /* rounded-md */
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  transition: box-shadow 0.2s ease;

  &:focus {
    box-shadow: 0 0 0 2px #60a5fa; /* focus:ring-2 focus:ring-blue-400 */
  }
`;

const Button = styled.button`
  background-color: #3b82f6; /* Tailwind: bg-blue-500 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2563eb; /* Tailwind: hover:bg-blue-600 */
  }
`;

// 💡 Component Logic
function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task..."
      />
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default AddTask;
