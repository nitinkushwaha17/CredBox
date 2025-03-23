import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { themeType } from "./_layout";
import { useGlobalStore } from "@/store";

export default function Main() {
  const theme = useGlobalStore((state) => state.theme);

  return (
    <Stack>
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
        name="counterInfo"
        options={{
          contentStyle: { backgroundColor: Colors[theme].background },
        }}
      />
      <Stack.Screen
        name="newRequest"
        options={{
          contentStyle: { backgroundColor: Colors[theme].background },
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
