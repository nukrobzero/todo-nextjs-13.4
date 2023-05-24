import CreateTodo from "@/components/CreateTodo";
import TodoList from "@/components/TodoList";
import { prisma } from "@/db";
import { revalidateTag } from "next/cache";

export default async function Home() {
  const resData = await fetch(`http://localhost:3000/api/getTodo`, {
    next: { tags: ["TodoDatas"] },
  });
  const todos = await resData.json();

  //Create
  const createTodo = async (data: FormData) => {
    "use server";
    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("Invalid Title");
    }

    await prisma.todo.create({
      data: {
        title,
        complete: false,
      },
    });
    revalidateTag("TodoDatas");
  };

  //Delete
  const DeleteTodo = async (id: string) => {
    "use server";

    await prisma.todo.delete({
      where: {
        id,
      },
    });
    revalidateTag("TodoDatas");
  };

  //Toggle
  const toggleTodo = async (id: string, complete: boolean) => {
    "use server";

    await prisma.todo.update({ where: { id }, data: { complete } });
    revalidateTag("TodoDatas");
  };

  return (
    <div className="p-8">
      <div>
        <h1 className="text-2xl text-slate-100 font-bold">Todo List</h1>
        <CreateTodo createTodo={createTodo} />
        <ul className="pl-4">
          {todos.data.map((todo: any) => (
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
