import prisma from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Editor } from "../../_components/Editor";

const WorkflowEditorPage = async ({
  params,
}: {
  params: { workflowId: string };
}) => {
  const { workflowId } = params;
  const { userId } = await auth();

  if (!userId) return <div>Não autorizado</div>;

  const workflow = await prisma.workflow.findUnique({
    where: {
      id: workflowId,
      userId,
    },
  });

  if (!workflow) return <div>Workflow não encontrado</div>;

  return <Editor workflow={workflow} />;
};

export default WorkflowEditorPage;
