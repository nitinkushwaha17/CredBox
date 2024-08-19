import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function FAB() {
  return (
    <Pressable style={styles.container}>
      <Ionicons name="add-outline" style={styles.icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: Colors.dark.primary,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  icon: {
    fontSize: 24,
    color: Colors.dark.text,
    fontWeight: "bold",
  },
});
