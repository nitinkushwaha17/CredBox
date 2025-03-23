import { ThemeContext } from "@/contexts/ThemeContext";
import { Colors } from "@/constants/Colors";
import { useContext, useMemo } from "react";
import { useGlobalStore } from "@/store";

// Bottom sheet doesn't re-render when theme is changed. Why?
// Therefore use parameter customTheme(passed from parent to child)
export function useStyle(styles: any) {
  const themeScheme = useGlobalStore((state) => state.theme);
  const theme = themeScheme;

  const style = useMemo(() => styles(Colors[theme]), [theme]);

  return style;
}
