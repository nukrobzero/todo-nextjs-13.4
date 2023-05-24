import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/db";

export async function GET(req: NextRequest) {
  const data = await prisma.todo.findMany();

  return NextResponse.json({ data });
}
