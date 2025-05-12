import {
  Redirect,
  Stack,
  useRootNavigationState,
  useRouter,
  router,
} from "expo-router";
import { Colors } from "@/constants/Colors";
import { useGlobalStore } from "@/store";

export default function Main() {
  const theme = useGlobalStore((state) => state.theme);

  return (
    <Stack
      screenOptions={{
        navigationBarColor: Colors[theme].background,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Colors[theme].background,
          },
        }}
      />
      <Stack.Screen
        name="counterInfo/[id]"
        options={{
          contentStyle: { backgroundColor: Colors[theme].background },
          headerStyle: {
            backgroundColor: Colors[theme].background,
          },
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: Colors[theme].text,
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen
        name="newRequest"
        options={{
          contentStyle: { backgroundColor: Colors[theme].background },
          headerStyle: {
            backgroundColor: Colors[theme].background,
          },
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: Colors[theme].text,
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="splash" />
    </Stack>
  );
}
