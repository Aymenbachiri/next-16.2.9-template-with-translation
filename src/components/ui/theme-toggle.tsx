"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useTransition } from "react";

type ThemeToggleProps = React.ComponentProps<"button"> & {
  className?: string;
};

export function ThemeToggle({
  className,
}: ThemeToggleProps): React.JSX.Element {
  const { resolvedTheme, setTheme } = useTheme();
  const [isPending, startTransition] = useTransition();

  const toggle = () => {
    startTransition(() => {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    });
  };

  return (
    <Button
      onClick={toggle}
      disabled={isPending}
      className={cn(
        "rounded-full transition-transform hover:scale-110",
        className,
      )}
      aria-label="Toggle theme"
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="block dark:hidden" />
    </Button>
  );
}
