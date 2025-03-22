import { StateCreator } from "zustand";

interface todType {
  id: string;
  name: string;
  start_time: number;
  end_time: number;
}

export interface TodSliceType {
  tod: null | todType;
  setTod: (tod: todType) => void;
}

export const todSlice: StateCreator<TodSliceType, [], [], TodSliceType> = (
  set
) => ({
  tod: null,
  setTod: (newTod) => set({ tod: newTod }),
});
