"use client";

import { useLocaleSwitcherSelect } from "@/lib/hooks/use-locale-switcher";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type OptionItem = {
  value: string;
  flag: React.ReactNode;
  label: string;
};

type Props = {
  options: OptionItem[];
  defaultValue: string;
  label: string;
};

export function LocaleSwitcherSelect({
  options,
  defaultValue,
  label,
}: Props): React.JSX.Element {
  const { locale, onSelect, isPending } = useLocaleSwitcherSelect();

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={onSelect}
      disabled={isPending}
      aria-label={label}
      key={JSON.stringify(locale)}
    >
      <SelectTrigger className="w-auto cursor-pointer gap-2 border-none bg-transparent text-gray-400 shadow-none hover:text-gray-200 focus:ring-0 disabled:opacity-30">
        <SelectValue>
          {options.find((o) => o.value === defaultValue)?.flag}
        </SelectValue>
      </SelectTrigger>

      <SelectContent align="end" dir={locale === "ar" ? "rtl" : "ltr"}>
        {options.map((opt) => (
          <SelectItem
            key={opt.value}
            value={opt.value}
            className="cursor-pointer"
          >
            <span className="flex items-center gap-3">
              <span className="flex items-center">{opt.flag}</span>
              <span>{opt.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
