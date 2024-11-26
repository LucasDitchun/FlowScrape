"use client";

import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
} from "lucide-react";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";

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
    laber: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "billing",
    laber: "Billing",
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

export default DesktopSidebar;
