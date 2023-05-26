"use server";
import { prisma } from "@/db";
import { revalidatePath } from "next/cache";

//Get
export const getTodo = async () => {
  const todos = await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return todos;
};

//Create
export const createTodo = async (data: FormData) => {
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
export const DeleteTodo = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};

//Toggle
export const toggleTodo = async (id: string, complete: boolean) => {
  await prisma.todo.update({ where: { id }, data: { complete } });
  revalidatePath("/");
};
