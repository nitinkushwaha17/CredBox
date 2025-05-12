import { Colors } from "@/constants/Colors";
import { useMemo } from "react";
import { useGlobalStore } from "@/store";

export function useColor() {
  const theme = useGlobalStore((state) => state.theme);

  const color = useMemo(() => Colors[theme], [theme]);

  return color;
}
