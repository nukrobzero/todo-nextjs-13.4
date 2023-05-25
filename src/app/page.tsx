import CreateTodo from "@/components/CreateTodo";
import TodoList from "@/components/TodoList";
import { prisma } from "@/db";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const todos = await prisma.todo.findMany();

  //Create
  const createTodo = async (data: FormData) => {
    "use server";
    const title = data.get("title") as string;

    await prisma.todo.create({
      data: {
        title,
        complete: false,
      },
    });
    revalidatePath("/");
  };

  //Delete
  const DeleteTodo = async (id: string) => {
    "use server";

    await prisma.todo.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
  };

  //Toggle
  const toggleTodo = async (id: string, complete: boolean) => {
    "use server";

    await prisma.todo.update({ where: { id }, data: { complete } });
    revalidatePath("/");
  };

  return (
    <div className="p-8">
      <div>
        <h1 className="text-2xl text-slate-100 font-bold">Todo List</h1>
        <CreateTodo createTodo={createTodo} />
        <ul className="pl-4">
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
