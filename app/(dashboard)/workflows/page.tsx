import { getWorkflowsForUser } from "@/app/_actions/workflows/getWorkflowsForUser";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/app/_components/ui/alert";
import { Button } from "@/app/_components/ui/button";
import { Skeleton } from "@/app/_components/ui/skeleton";
import { AlertCircle, InboxIcon, Layers2Icon } from "lucide-react";
import { Suspense } from "react";

const Workflows = () => {
  return (
    <div className="flex h-full flex-1 flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3x1 font-bold">Workflows</h1>
          <p className="text-muted-foreground">Gerencie seus Workflows</p>
        </div>
      </div>

      <div className="h-full py-6">
        <Suspense fallback={<UserWorkFlowsSkeleton />}>
          <UserWorkFlows />
        </Suspense>
      </div>
    </div>
  );
};

const UserWorkFlowsSkeleton = () => {
  return (
    <div className="space-y-2">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-32 w-full bg-muted" />
      ))}
    </div>
  );
};

const UserWorkFlows = async () => {
  const workflows = await getWorkflowsForUser();

  if (!workflows) {
    return (
      <Alert variant={"destructive"}>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Erro ao carregar Workflows</AlertTitle>
        <AlertDescription>
          Não foi possível carregar seus Workflows. Tente novamente mais tarde!
        </AlertDescription>
      </Alert>
    );
  }

  if (workflows.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent">
          <InboxIcon size={40} className="stroke-primary" />
        </div>
        <div className="flex flex-col gap-1 text-center">
          <p className="font-bold">Nenhum Workflow foi criado ainda</p>
          <p className="text-sm text-muted-foreground">
            Clique no botão abaixo para criar seu primeiro workflow
          </p>
          <Button className="mt-4">
            <Layers2Icon />
            Criar Workflow
          </Button>
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default Workflows;