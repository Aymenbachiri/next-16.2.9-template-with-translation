import { DirectionProvider } from "@/components/ui/direction";
import type { LocaleType } from "@/i18n/navigation";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { SmoothScrollingProvider } from "./smooth-scrolling-provider";

type AllProvidersProps = {
  children: React.ReactNode;
  dir: "ltr" | "rtl";
  locale: LocaleType;
};

export function AllProviders({
  children,
  dir,
  locale,
}: AllProvidersProps): React.JSX.Element {
  return (
    <SmoothScrollingProvider>
      <NextIntlClientProvider locale={locale}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DirectionProvider direction={dir}>{children}</DirectionProvider>
        </ThemeProvider>
      </NextIntlClientProvider>
    </SmoothScrollingProvider>
  );
}
