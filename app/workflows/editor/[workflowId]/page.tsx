import prisma from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";

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

  return <pre className="h-screen">{JSON.stringify(workflow, null, 4)}</pre>;
};

export default WorkflowEditorPage;
