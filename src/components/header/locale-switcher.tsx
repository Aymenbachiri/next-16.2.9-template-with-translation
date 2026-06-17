import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { AlgeriaFlagIcon } from "@/lib/icons/algeria-flag-icon";
import { FranceFlagIcon } from "@/lib/icons/france-flag-icon";
import { UsaFlagIcon } from "@/lib/icons/usa-flag-icon";
import type { LocaleType } from "@/i18n/navigation";
import { LocaleSwitcherSelect } from "./locale-switcher-select";

const FLAG_MAP: Record<string, React.ReactNode> = {
  ar: <AlgeriaFlagIcon />,
  fr: <FranceFlagIcon />,
  en: <UsaFlagIcon />,
};

export function LocaleSwitcher(): React.JSX.Element {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale() as LocaleType;

  const options = routing.locales.map((cur) => ({
    value: cur,
    flag: FLAG_MAP[cur] ?? null,
    label: t("locale", { locale: cur }),
  }));

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      label={t("label")}
      options={options}
    />
  );
}
