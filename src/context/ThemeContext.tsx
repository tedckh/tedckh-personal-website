"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/GlobalStyles";

type ThemeContextType = {
  themeMode: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function CustomThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [isMounted, setIsMounted] = useState(false);

  const theme = useMemo(() => {
    return themeMode === "light" ? lightTheme : darkTheme;
  }, [themeMode]);

  const toggleTheme = useCallback(() => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("themeMode");
    if (savedTheme === "light" || savedTheme === "dark") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setThemeMode(savedTheme);
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setThemeMode(prefersDark ? "dark" : "light");
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    window.localStorage.setItem("themeMode", themeMode);
  }, [isMounted, themeMode]);

  if (!isMounted) return null;

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a CustomThemeProvider");
  }
  return context;
};
