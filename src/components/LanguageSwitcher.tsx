"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import styled from "styled-components";

const SwitcherButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }
`;

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleSwitch = () => {
    const nextLocale = locale === "en" ? "zh" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <SwitcherButton onClick={handleSwitch}>
      {locale === "en" ? "中文" : "EN"}
    </SwitcherButton>
  );
}
