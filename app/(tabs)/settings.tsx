import { StatusBar, StyleSheet, Switch, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { Colors } from "@/constants/Colors";

export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [darkTheme, setDarkTheme] = useState(theme === "dark");

  useEffect(() => {
    setTheme(darkTheme ? "dark" : "light");
  }, [darkTheme]);

  useEffect(() => {
    setDarkTheme(theme == "dark");
  }, [theme]);

  return (
    <View style={{ flex: 1, paddingHorizontal: 16, gap: 32, paddingTop: 24 }}>
      <StatusBar
        barStyle={theme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={Colors[theme ?? "light"].background}
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
            color: Colors[theme ?? "light"].text,
            fontWeight: "600",
            fontSize: 16,
          }}
        >
          Dark mode
        </Text>
        <Switch
          value={darkTheme}
          onChange={() => setDarkTheme(!darkTheme)}
          thumbColor={"#6464ff"}
          trackColor={{ true: "#6464ff55" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
