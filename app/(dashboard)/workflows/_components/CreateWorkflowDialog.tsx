"use client";

import { CustomDialogHeader } from "@/app/_components/CustomDialogHeader";
import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import {
  createWorkflowSchema,
  createWorkflowSchemaType,
} from "@/app/_schema/workflow";
import { Layers2Icon, Loader2 } from "lucide-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { createWorkflow } from "@/app/_actions/workflows/createWorkflow";
import { toast } from "sonner";

export const CreateWorkflowDialog = ({
  triggerText,
}: {
  triggerText?: string;
}) => {
  const [open, setOpen] = useState(false);

  const form = useForm<createWorkflowSchemaType>({
    resolver: zodResolver(createWorkflowSchema),
    defaultValues: {},
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createWorkflow,
    onSuccess: () => {
      toast.success("Workflow criado com sucesso", { id: "create-workflow" });
    },
    onError: () => {
      toast.error("Erro ao criar workflow", { id: "create-workflow" });
    },
  });

  const onSubmit = useCallback(
    (values: createWorkflowSchemaType) => {
      toast.loading("Criando workflow...", { id: "create-workflow" });
      mutate(values);
    },
    [mutate],
  );

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
        <div className="p-6">
          <Form {...form}>
            <form
              className="w-full space-y-8"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1">
                      Nome
                      <p className="text-xs text-primary">(obrigatório)</p>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Escolha um nome descritivo e único.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1">
                      Descrição
                      <p className="text-xs text-muted-foreground">
                        (opcional)
                      </p>
                    </FormLabel>
                    <FormControl>
                      <Textarea className="resize-none" {...field} />
                    </FormControl>
                    <FormDescription>
                      Forneça uma descrição sobre seu workflow.
                      <br />
                      Isso é opcional, mas pode ajudar a lembrar o propósito do
                      workflow.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isPending}>
                {!isPending && "Criar Workflow"}
                {isPending && <Loader2 className="animate-spin" />}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
