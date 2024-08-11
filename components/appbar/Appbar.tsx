import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import CBBottomSheet from "../CBBottomSheet";
import { Colors } from "@/constants/Colors";

export default function Appbar() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  return (
    <View style={styles.appbar}>
      <CBBottomSheet ref={bottomSheetRef} />
      <TouchableOpacity
        style={[styles.select, { maxWidth: "60%" }]}
        onPress={() => bottomSheetRef.current?.present()}
      >
        <Ionicons name="location-outline" style={styles.icon} />
        <Text style={styles.text}>KP Towers - South Block</Text>
        <Ionicons name="chevron-down" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.select}
        onPress={() => bottomSheetRef.current?.present()}
      >
        <Ionicons name="time-outline" style={styles.icon} />
        <Text style={styles.text}>Lunch</Text>
        <Ionicons name="chevron-down" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Colors.dark.background,
  },
  text: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  dropdown: {
    backgroundColor: "transparent",
    width: 150,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  selectedTextStyle: {
    color: "white",
    fontWeight: "bold",
  },
  icon: {
    color: "white",
    fontSize: 14,
  },
  select: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
