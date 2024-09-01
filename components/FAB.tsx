import { Pressable, StyleSheet, Text, TouchableHighlight } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FAB() {
  return (
    <Link href="/newRequest" asChild>
      <Pressable style={styles.container}>
        <FontAwesome6 name="add" size={24} color="black" style={styles.icon} />
      </Pressable>
    </Link>
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
    height: 60,
    width: 60,
  },
  icon: {
    fontSize: 24,
    color: Colors.dark.text,
    fontWeight: "800",
  },
});
