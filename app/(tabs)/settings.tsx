import { StyleSheet, Switch, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../_layout";

export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [darkTheme, setDarkTheme] = useState(theme === "dark");

  useEffect(() => {
    setTheme(darkTheme ? "dark" : "light");
  }, [darkTheme]);

  return (
    <View style={{ flex: 1, paddingHorizontal: 16, gap: 32, paddingTop: 24 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Dark mode</Text>
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
