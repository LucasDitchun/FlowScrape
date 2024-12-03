"use client";

import { CustomDialogHeader } from "@/app/_components/CustomDialogHeader";
import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Layers2Icon } from "lucide-react";
import { useState } from "react";

export const CreateWorkflowDialog = ({
  triggerText,
}: {
  triggerText?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{triggerText ?? "Criar Workflow"}</Button>
      </DialogTrigger>
      <DialogContent className="px-0">
        <CustomDialogHeader
          icon={Layers2Icon}
          title="Criar Workflow"
          subTitle="Comece a construir seu workflow"
        />
      </DialogContent>
    </Dialog>
  );
};
