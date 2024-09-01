import { ThemeContext } from "@/app/_layout";
import { Colors } from "@/constants/Colors";
import { useContext, useMemo } from "react";

export function useStyle(styles: any) {
  const { theme } = useContext(ThemeContext);

  const style = useMemo(() => styles(Colors[theme]), [theme]);

  return style;
}
