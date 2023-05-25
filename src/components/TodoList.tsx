"use client";
import { RiDeleteBin5Line } from "react-icons/ri";

interface TodoProps {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  todoDelete: (id: string) => void;
}

export default function TodoList({
  id,
  title,
  complete,
  toggleTodo,
  todoDelete,
}: TodoProps) {
  return (
    <li className="flex items-center justify-between gap-x-24 w-full mx-auto px-8 py-2">
      <div className="flex gap-1 justify-center items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer text-xl peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </div>

      <button
        onClick={() => todoDelete(id)}
        className="ml-20 text-red-500 hover:text-red-700"
      >
        <RiDeleteBin5Line size={30} />
      </button>
    </li>
  );
}
