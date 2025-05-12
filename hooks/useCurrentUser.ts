import { useGlobalStore } from "@/store";

export default function useCurrentUser() {
  const user = useGlobalStore((state) => state.user);
  const isDevEnv = process.env.EXPO_PUBLIC_APP_VARIANT == "Development";

  return isDevEnv ? user : "6702957c2a68d28a33bd7fae";
}
