import React, { useState } from "react";

export interface newTodo {
  title: string;
  status: boolean;
  description: string;
  handleToggle?:()=>void;
}
const Add = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const data:newTodo[] = JSON.parse(localStorage.getItem("todos") || "[]");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obj = {
      title: title,
      status: false,
      description: description,
    };
    const updateData = [...data, obj];
    localStorage.setItem("todos", JSON.stringify(updateData));
    setTitle("");
    setDescription("");
    window.location.reload()
  };

  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <input
        data-testid="title"
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        data-testid="description"
        id="description"
        cols={30}
        rows={10}
      ></textarea>
      <input type="submit" value="Craete Todo" />
    </form>
  );
};

export default Add;
