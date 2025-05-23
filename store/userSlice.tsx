import { StateCreator } from "zustand";

export interface UserSliceType {
  user: null | string;
  setUser: (user_id: string) => void;
}

export const userSlice: StateCreator<UserSliceType, [], [], UserSliceType> = (
  set
) => ({
  user: "",
  setUser: (user_id) => set({ user: user_id }),
});
