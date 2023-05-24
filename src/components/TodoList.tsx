"use client";

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
    <div>
      <li className="flex gap-1 items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>

        <button onClick={() => todoDelete(id)} className="ml-20">
          Delete
        </button>
      </li>
    </div>
  );
}
