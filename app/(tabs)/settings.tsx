import { StatusBar, StyleSheet, Switch, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useGlobalStore } from "@/store";

export default function Settings() {
  const systemTheme = useGlobalStore((state) => state.systemTheme);
  const toggleSystemTheme = useGlobalStore((state) => state.toggleSystemTheme);

  const theme = useGlobalStore((state) => state.theme);
  const setTheme = useGlobalStore((state) => state.setTheme);

  const user = useGlobalStore((state) => state.user);
  const setuser = useGlobalStore((state) => state.setUser);

  return (
    <View style={{ flex: 1, paddingHorizontal: 16, gap: 32, paddingTop: 24 }}>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={Colors[theme].background}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors[theme].text,
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Use system theme
        </Text>
        <Switch
          value={systemTheme}
          onChange={toggleSystemTheme}
          thumbColor={"#6464ff"}
          trackColor={{ true: "#6464ff55" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors[theme].text,
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Dark mode
        </Text>
        <Switch
          disabled={systemTheme}
          value={theme == "dark"}
          onChange={() => setTheme(theme == "dark" ? "light" : "dark")}
          thumbColor={"#6464ff"}
          trackColor={{ true: "#6464ff55" }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors[theme].text,
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          user {user}
        </Text>
        <Switch
          value={theme == "dark"}
          onChange={() => setuser((parseInt(user ? user : "1") + 1).toString())}
          thumbColor={"#6464ff"}
          trackColor={{ true: "#6464ff55" }}
        />
      </View>
    </View>
  );
}
