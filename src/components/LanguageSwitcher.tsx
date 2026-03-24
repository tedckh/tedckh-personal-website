"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import styled from "styled-components";

const SwitcherButton = styled(motion.button)`
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

const textVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleSwitch = () => {
    const nextLocale = locale === "en" ? "zh-HK" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <SwitcherButton
      onClick={handleSwitch}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={locale}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.2 }}
          style={{ display: "inline-block" }}
        >
          {locale === "en" ? "中文" : "EN"}
        </motion.span>
      </AnimatePresence>
    </SwitcherButton>
  );
}
