import {
  StyleSheet,
  Text,
  View,
  Image,
  useColorScheme,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "@/contexts/ThemeContext";
import { Colors } from "@/constants/Colors";
import LottieView from "lottie-react-native";

export default function Splash() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const win = Dimensions.get("window");
  const ratio = win.width / 1248;

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors[colorScheme ?? "light"].background,
      }}
    >
      <Image
        style={{
          width: win.width,
          height: 2778 * ratio,
          maxWidth: 450,
          maxHeight: 450,
          position: "absolute",
        }}
        source={require("@/assets/images/splash.png")}
        fadeDuration={0}
      />
      <LottieView
        style={{
          width: Math.min(win.height, win.width),
          height: Math.min(win.height, win.width),
          maxHeight: 500,
          maxWidth: 500,
          transform: [
            { translateY: -Math.min(win.height, win.width, 500) / 2 },
          ],
          position: "absolute",
        }}
        source={require("@/assets/animations/logo-anim.json")}
        autoPlay
        loop={false}
        duration={2500}
      />
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          position: "absolute",
          transform: [{ translateY: Math.min(win.height, win.width, 500) / 2 }],
        }}
      >
        <ActivityIndicator color={Colors[colorScheme ?? "light"].text} />
        <Text style={{ color: Colors[colorScheme ?? "light"].text }}>
          Registering your account
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
