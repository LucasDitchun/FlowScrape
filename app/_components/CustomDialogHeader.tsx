"use client";

import { LucideIcon } from "lucide-react";
import { DialogHeader, DialogTitle } from "./ui/dialog";
import { cn } from "../_lib/utils";
import { Separator } from "./ui/separator";

interface CustomDialogHeaderProps {
  title?: string;
  subTitle?: string;
  icon?: LucideIcon;

  iconClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}

export const CustomDialogHeader = (props: CustomDialogHeaderProps) => {
  return (
    <DialogHeader className="py-6">
      <DialogTitle asChild>
        <div className="mb=2 flex flex-col items-center gap-2">
          {props.icon && (
            <props.icon
              size={30}
              className={cn("stroke-primary", props.iconClassName)}
            />
          )}
          {props.title && (
            <p className={cn("text-x1 text-primary", props.titleClassName)}>
              {props.title}
            </p>
          )}
          {props.subTitle && (
            <p
              className={cn(
                "text-sm font-medium tracking-wide text-muted-foreground",
                props.subTitleClassName,
              )}
            >
              {props.subTitle}
            </p>
          )}
        </div>
      </DialogTitle>
      <Separator />
    </DialogHeader>
  );
};
