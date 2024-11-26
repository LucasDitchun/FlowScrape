import Link from "next/link";
import { cn } from "../_lib/utils";
import { SquareMousePointer } from "lucide-react";

const Logo = ({
  fontSize = "text-2x1",
  iconSize = 20,
}: {
  fontSize?: string;
  iconSize?: number;
}) => {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 text-2xl font-black", fontSize)}
    >
      <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-2">
        <SquareMousePointer size={iconSize} className="stroke-white" />
      </div>
      <div>
        <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
          Flow
        </span>
        <span className="text-stone-700 dark:text-stone-300">Scrape</span>
      </div>
    </Link>
  );
};

export default Logo;
