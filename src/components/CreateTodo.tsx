interface CreateProps {
  createTodo: (data: FormData) => void;
}

export default function CreateTodo({ createTodo }: CreateProps) {
  return (
    <div className="p-8">
      <form action={createTodo} className="flex gap-2">
        <div className="flex flex-col">
          <input
            id="title"
            name="title"
            placeholder="Title"
            required
            className="p-2 bg-transparent rounded-md border"
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
