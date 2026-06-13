"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useTransition } from "react";

export function ThemeToggle(): React.JSX.Element {
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
      className="rounded-full transition-transform hover:scale-110"
      aria-label="Toggle theme"
    >
      <SunIcon className="hidden dark:block" />
      <MoonIcon className="block dark:hidden" />
    </Button>
  );
}
