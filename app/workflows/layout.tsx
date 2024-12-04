import React from "react";
import { Separator } from "../_components/ui/separator";
import Logo from "../_components/Logo";
import { ModeToggle } from "../_components/ThemeModeToggle";

const WorkflowLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-full flex-col">
      {children}
      <Separator />
      <footer className="flex items-center justify-between p-2">
        <Logo iconSize={16} fontSize="text-xl" />
        <ModeToggle />
      </footer>
    </div>
  );
};

export default WorkflowLayout;
