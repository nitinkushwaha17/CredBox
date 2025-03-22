import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { themeType } from "./_layout";

export default function Main({ theme }: { theme: themeType }) {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
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
