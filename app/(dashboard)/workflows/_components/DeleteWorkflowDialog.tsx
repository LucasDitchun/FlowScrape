"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";

interface DeleteWorkflowDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const DeleteWorkflowDialog = ({ open }: DeleteWorkflowDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza disso?</AlertDialogTitle>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};
