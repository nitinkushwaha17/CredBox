import { themeType } from "@/app/_layout";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StateCreator } from "zustand";

export interface ThemeSliceType {
  theme: themeType;
  systemTheme: boolean;
  toggleSystemTheme: () => void;
  setTheme: (theme: themeType) => void;
}

export const themeSlice: StateCreator<
  ThemeSliceType,
  [],
  [],
  ThemeSliceType
> = (set) => ({
  theme: "light",
  systemTheme: true,
  toggleSystemTheme: () =>
    set((state) => ({ systemTheme: !state.systemTheme })),
  setTheme: (newTheme) =>
    set({
      theme: newTheme,
    }),
});
