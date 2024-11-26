"use client";

import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  MenuIcon,
  ShieldCheckIcon,
} from "lucide-react";
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const routes = [
  {
    href: "",
    laber: "Home",
    icon: HomeIcon,
  },
  {
    href: "workflows",
    laber: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "credentials",
    laber: "Credenciais",
    icon: ShieldCheckIcon,
  },
  {
    href: "billing",
    laber: "Pagamento",
    icon: CoinsIcon,
  },
];

const DesktopSidebar = () => {
  const pathName = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathName.includes(route.href),
    ) || routes[0];

  return (
    <div className="relative hidden h-screen w-full min-w-[280px] max-w-[280px] border-separate overflow-hidden border-r-2 bg-primary/5 text-muted-foreground dark:bg-secondary/30 dark:text-foreground md:block">
      <div className="flex border-separate items-center justify-center gap-2 border-b-[1px] p-4">
        <Logo />
      </div>
      <div className="p-2">TODO CREDITS</div>
      <div className="flex flex-col space-y-1 p-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            // className={`flex items-center gap-2 p-2`}
            className={buttonVariants({
              variant:
                activeRoute.href === route.href
                  ? "sidebarActiveItem"
                  : "sidebarItem",
            })}
          >
            <route.icon size={20} />
            {route.laber}
          </Link>
        ))}
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathName.includes(route.href),
    ) || routes[0];

  return (
    <h1 className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] space-y-4 sm:w-[540px]"
            side={"left"}
          >
            <Logo />
            <div className="flex flex-col gap-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={buttonVariants({
                    variant:
                      activeRoute.href === route.href
                        ? "sidebarActiveItem"
                        : "sidebarItem",
                  })}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <route.icon size={20} />
                  {route.laber}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </h1>
  );
};

export { MobileSidebar, DesktopSidebar };
