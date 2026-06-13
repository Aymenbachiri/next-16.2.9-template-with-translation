import { DirectionProvider } from "@/components/ui/direction";
import { ThemeProvider } from "@/providers/theme-provider";

export default function AllProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DirectionProvider direction="rtl">{children}</DirectionProvider>
    </ThemeProvider>
  );
}
