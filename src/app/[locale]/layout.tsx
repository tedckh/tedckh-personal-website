import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { CustomThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <CustomThemeProvider>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
          </CustomThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
