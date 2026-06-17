import { useParams } from "next/navigation";
import { useTransition } from "react";
import { type LocaleType, usePathname, useRouter } from "@/i18n/navigation";

type UseLocaleSwitcherSelectReturn = {
  locale: LocaleType;
  onSelect: (value: string | null) => void;
  isPending: boolean;
};

export function useLocaleSwitcherSelect(): UseLocaleSwitcherSelectReturn {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as LocaleType;

  function onSelect(value: string | null): void {
    if (!value) return;

    const nextLocale = value as LocaleType;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return { locale, onSelect, isPending };
}
