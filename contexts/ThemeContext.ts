import { createContext } from "react";

type themeType = "light" | "dark";

interface ThemeContextType {
  theme: themeType;
  setTheme: (Color: any) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: (Color: any) => {},
});
