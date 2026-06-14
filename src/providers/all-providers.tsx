import { DirectionProvider } from "@/components/ui/direction";
import { ThemeProvider } from "@/providers/theme-provider";

type AllProvidersProps = {
  children: React.ReactNode;
};

export default function AllProviders({ children }: AllProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <DirectionProvider direction="rtl">{children}</DirectionProvider>
    </ThemeProvider>
  );
}
