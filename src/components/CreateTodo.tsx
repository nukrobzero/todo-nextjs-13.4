"use client";

import { useRef } from "react";

interface CreateProps {
  createTodo: (data: FormData) => void;
}

export default function CreateTodo({ createTodo }: CreateProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const hendelActiomForm = async (data: FormData) => {
    await createTodo(data);
    formRef.current?.reset();
  };
  return (
    <div className="p-8 w-full">
      <form
        ref={formRef}
        action={hendelActiomForm}
        className="flex gap-2 w-full"
      >
        <div className="flex flex-col w-full">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            required
            className="p-2 w-full bg-transparent rounded-md border"
          />
        </div>
        <button
          type="submit"
          className="border p-2 text-slate-100 rounded-md no-underline hover:bg-slate-700"
        >
          Create
        </button>
      </form>
    </div>
  );
}
