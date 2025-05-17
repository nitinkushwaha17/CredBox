import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { useStyle } from "@/hooks/useStyle";
import { useColor } from "@/hooks/useColor";
import { useNavigation } from "expo-router";
import axios from "@/axios";
import { useGlobalStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { isDevEnv } from "@/utils";

export default function Splash() {
  const styles = useStyle(style);
  const Colors = useColor();
  const insets = useSafeAreaInsets();

  const win = Dimensions.get("window");
  const ratio = win.width / 1248;

  const setUser = useGlobalStore((state) => state.setUser);
  const url = isDevEnv() ? "/user/test" : "/user/register";

  const { isPending, error, data, isFetching, refetch, isSuccess } = useQuery({
    queryKey: ["allRequests"],
    queryFn: async () => {
      return await axios.get(url);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setUser(data.data.user);
      }, 2000);
    }
  }, [isSuccess]);

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        styles.container,
      ]}
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
        <ActivityIndicator color="#6728ff" />
        <Text style={{ color: Colors.text }}>Registering your account</Text>
      </View>
    </View>
  );
}

const style = (Colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.background,
    },
  });
