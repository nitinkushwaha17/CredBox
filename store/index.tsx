import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userSlice, UserSliceType } from "./userSlice";
import { themeSlice, ThemeSliceType } from "./themeSlice";
import { todSlice, TodSliceType } from "./todSlice";

type GlobalStore = UserSliceType & ThemeSliceType & TodSliceType;

export const useGlobalStore = create<GlobalStore>()(
  persist(
    (...a) => ({
      ...userSlice(...a),
      ...themeSlice(...a),
      ...todSlice(...a),
    }),
    {
      name: "global-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
