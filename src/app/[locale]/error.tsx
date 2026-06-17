"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCw } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function Error({
  error,
  unstable_retry,
}: Props): React.JSX.Element {
  const t = useTranslations("Error");
  const locale = useLocale();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-background flex min-h-screen items-center justify-center px-4">
      <section className="border-border bg-card w-full max-w-lg rounded-2xl border p-8 shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="bg-destructive/10 mb-4 rounded-full p-4">
            <AlertTriangle
              size={24}
              color="currentColor"
              strokeWidth={1.5}
              className="text-destructive size-10"
            />
          </div>
          <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h1>
          <p className="text-muted-foreground mt-3 text-sm leading-6 sm:text-base">
            {t("description")}
          </p>
          <Button
            onClick={() => unstable_retry()}
            className="bg-primary text-primary-foreground focus:ring-ring mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            <RotateCw
              color="currentColor"
              strokeWidth={1.5}
              className={cn(
                "text-destructive size-6",
                locale === "ar" && "rotate-180",
              )}
            />

            {t("retry")}
          </Button>
          {process.env.NODE_ENV === "development" && (
            <pre className="bg-muted text-muted-foreground mt-6 w-full overflow-auto rounded-lg p-4 text-left text-xs">
              {error.message}
            </pre>
          )}
        </div>
      </section>
    </main>
  );
}
