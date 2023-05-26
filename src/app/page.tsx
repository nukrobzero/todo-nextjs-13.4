import CreateTodo from "@/components/CreateTodo";
import TodoList from "@/components/TodoList";
import {
  DeleteTodo,
  createTodo,
  getTodo,
  toggleTodo,
} from "./_actions/actions";

export default async function Home() {
  const todos = await getTodo();
  return (
    <div className="max-w-xl mx-auto">
      <div className="flex flex-col justify-center items-center my-8">
        <h1 className="text-4xl text-slate-100 font-bold">Todo List</h1>
        <CreateTodo createTodo={createTodo} />
        <ul className="flex flex-col justify-center items-center w-full mx-auto">
          {todos.map((todo: any) => (
            <TodoList
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              todoDelete={DeleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
