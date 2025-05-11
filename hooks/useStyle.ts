import { ThemeContext } from "@/contexts/ThemeContext";
import { Colors } from "@/constants/Colors";
import { useContext, useMemo } from "react";
import { useGlobalStore } from "@/store";

export function useStyle(styles: any) {
  const themeScheme = useGlobalStore((state) => state.theme);
  const theme = themeScheme;

  const style = useMemo(() => styles(Colors[theme]), [theme]);

  return style;
}
