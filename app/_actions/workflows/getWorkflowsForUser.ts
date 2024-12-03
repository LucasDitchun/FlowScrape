"use server";

import prisma from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";

export const getWorkflowsForUser = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  return prisma.workflow.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
};
