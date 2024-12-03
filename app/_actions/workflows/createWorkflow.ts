"use server";

import prisma from "@/app/_lib/prisma";
import { WorkflowStatus } from "@/app/_types/workflows";
import {
  createWorkflowSchema,
  createWorkflowSchemaType,
} from "@/app/_schema/workflow";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const createWorkflow = async (form: createWorkflowSchemaType) => {
  const { success, data } = createWorkflowSchema.safeParse(form);
  if (!success) {
    throw new Error("Dados no formulário inválidos");
  }

  const userId = (await auth()).userId;
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const result = await prisma.workflow.create({
    data: {
      userId,
      status: WorkflowStatus.DRAFT,
      definition: "PENDENTE",
      ...data,
    },
  });

  if (!result) {
    throw new Error("Erro ao criar workflow");
  }

  redirect(`/workflows/editor/${result.id}`);
};
