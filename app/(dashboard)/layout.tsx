import React from "react";
import { Separator } from "@/app/_components/ui/separator";
import DesktopSidebar from "../_components/DesktopSidebar";
import BreadcrumbHeader from "../_components/BreadcrumbHeader";
import { ModeToggle } from "../_components/ThemeModeToggle";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="container flex h-[50px] items-center justify-between px-6 py-4">
          <BreadcrumbHeader />
          <div className="flex items-center gap-1">
            <ModeToggle />
          </div>
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="container flex-1 px-6 py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
