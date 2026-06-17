import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFoundPage(): React.JSX.Element {
  const t = useTranslations("notFound");

  return (
    <main className="bg-background flex min-h-screen items-center justify-center px-6 py-12">
      <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-primary text-sm font-semibold tracking-widest uppercase">
          404 {t("error")}
        </p>
        <h1 className="text-foreground mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          {t("title")}
        </h1>
        <p className="text-muted-foreground mt-6 max-w-xl text-base leading-7 sm:text-lg">
          {t("description")}
        </p>
        <nav className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="bg-primary text-primary-foreground inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition hover:opacity-90"
          >
            {t("backHome")}
          </Link>
          <Link
            href="/contact"
            className="border-border text-foreground hover:bg-muted inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-medium transition"
          >
            {t("contactSupport")}
          </Link>
        </nav>
      </section>
    </main>
  );
}
