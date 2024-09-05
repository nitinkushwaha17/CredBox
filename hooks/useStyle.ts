import { ThemeContext } from "@/contexts/ThemeContext";
import { Colors } from "@/constants/Colors";
import { useContext, useMemo } from "react";

// Bottom sheet doesn't re-render when theme is changed. Why?
// Therefore use parameter customTheme(passed from parent to child)
export function useStyle(styles: any, customTheme?: "dark" | "light") {
  const theme = customTheme ?? useContext(ThemeContext).theme;

  const style = useMemo(() => styles(Colors[theme]), [theme]);

  return style;
}
