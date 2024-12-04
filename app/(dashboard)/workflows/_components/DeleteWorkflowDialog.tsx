"use client";

import { deleteWorkflow } from "@/app/_actions/workflows/deleteWorkflow";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";
import { Input } from "@/app/_components/ui/input";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

interface DeleteWorkflowDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  workflowName: string;
  workflowId: string;
}

export const DeleteWorkflowDialog = ({
  open,
  setOpen,
  workflowName,
  workflowId,
}: DeleteWorkflowDialogProps) => {
  const [confirmText, setConfirmText] = useState("");
  const deleteMutation = useMutation({
    mutationFn: deleteWorkflow,
    onSuccess: () => {
      toast.success("Workflow excluído com sucesso", { id: workflowId });
      setConfirmText("");
    },
    onError: () => {
      toast.error("Erro ao excluir workflow", { id: workflowId });
    },
  });

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza disso?</AlertDialogTitle>
          <AlertDialogDescription>
            Se você excluir este workflow, não poderá mais recuperá-lo.
            <div className="flex flex-col gap-2 py-4">
              <p>
                Se tiver certeza, digite{" "}
                <span className="user-select-none select-none">
                  <b>{workflowName}</b>
                </span>{" "}
                para confirmar:
              </p>
              <Input
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-3">
          <AlertDialogCancel
            className="text-sm"
            onClick={() => setConfirmText("")}
          >
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={confirmText !== workflowName || deleteMutation.isPending}
            className="text=destructive-foreground bg-destructive hover:bg-destructive/90"
            onClick={(e) => {
              e.stopPropagation();
              toast.loading("Deletando workflow...", { id: workflowId });
              deleteMutation.mutate(workflowId);
            }}
          >
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
