import { themeType } from "@/app/_layout";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StateCreator } from "zustand";

export interface ThemeSliceType {
  theme: themeType;
  setTheme: (theme: themeType) => void;
}

export const themeSlice: StateCreator<
  ThemeSliceType,
  [],
  [],
  ThemeSliceType
> = (set) => ({
  theme: "light",
  setTheme: (newTheme) => set({ theme: newTheme }),
});
