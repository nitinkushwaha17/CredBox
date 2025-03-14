import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { createContext, useEffect, useState } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Colors } from "@/constants/Colors";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import Splash from "./splash";
import { ThemeContext } from "@/contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export type themeType = "light" | "dark";
export const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // const [colorScheme, setColorScheme] = useState<ColorSchemeName>(
  //   Appearance.getColorScheme()
  // );

  // useEffect(() => {
  //   const subscription = Appearance.addChangeListener(
  //     ({ colorScheme: newColorScheme }: { colorScheme: ColorSchemeName }) => {
  //       setColorScheme(newColorScheme);
  //     }
  //   );
  //   return () => subscription.remove();
  // }, [setColorScheme]);

  const [theme, setTheme] = useState<themeType>(
    colorScheme ? colorScheme : "light"
  );

  useEffect(() => {
    setTheme(colorScheme ? colorScheme : "light");
  }, [colorScheme]);

  const themeData = { theme, setTheme };

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: Colors.dark.background,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <BottomSheetModalProvider>
          <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
            <ThemeContext.Provider value={themeData}>
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
            </ThemeContext.Provider>
          </ThemeProvider>
        </BottomSheetModalProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
