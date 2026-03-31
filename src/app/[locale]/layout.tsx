import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { CustomThemeProvider } from "@/context/ThemeContext";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ClientLayout from "@/components/ClientLayout";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("title");
  const description = t("description");
  const url = "https://tedckh.com";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${url}/${locale}`,
      languages: {
        en: `${url}/en`,
        "zh-HK": `${url}/zh-HK`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: title,
      //TODO: add a 1200x630px image to the `public` folder for social media previews
      // images: [
      //   {
      //     url: `${url}/og-image.png`,
      //     width: 1200,
      //     height: 630,
      //   }
      // ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      //TODO: add a Twitter-specific image
      images: [`${url}/twitter-image.png`],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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
            <NextIntlClientProvider>
              <ClientLayout>{children}</ClientLayout>
              <Analytics />
            </NextIntlClientProvider>
          </CustomThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
