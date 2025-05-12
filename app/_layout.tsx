import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { createContext, useEffect, useState } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Colors } from "@/constants/Colors";
import LottieView from "lottie-react-native";
import { View, StyleSheet, StatusBar } from "react-native";
import { ThemeContext } from "@/contexts/ThemeContext";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useGlobalStore } from "@/store";
import Main from "./main";
import { useStyle } from "@/hooks/useStyle";
import Splash from "./splash";
import { useColor } from "@/hooks/useColor";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export type themeType = "light" | "dark";
export const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded && useGlobalStore.persist.hasHydrated()) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    console.log(useGlobalStore.persist.hasHydrated());
  }, []);

  const styles = useStyle(style);
  const Colors = useColor();
  const colorScheme = useColorScheme();
  const systemTheme = useGlobalStore((state) => state.systemTheme);
  const setTheme = useGlobalStore((state) => state.setTheme);

  useEffect(() => {
    if (systemTheme) setTheme(colorScheme ?? "light");
  });

  const user = useGlobalStore((state) => state.user);
  console.log(user);

  if (!loaded || !useGlobalStore.persist.hasHydrated()) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: Colors.background,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <BottomSheetModalProvider>
          <StatusBar backgroundColor={Colors.background} />
          {user ? <Main /> : <Splash />}
          {/* <Main /> */}
        </BottomSheetModalProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

const style = (Colors: any) =>
  StyleSheet.create({
    contentContainer: {
      gap: 12,
      marginTop: 12,
    },
    heading: {
      fontSize: 18,
      color: Colors.text,
      fontWeight: "600",
    },
  });
