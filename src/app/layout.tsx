import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { CustomThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ted Chiu Ka Ho | Senior Analysis Programmer",
  description: "Personal portfolio of Ted Chiu Ka Ho, a passionate developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <CustomThemeProvider>{children}</CustomThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
