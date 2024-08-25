import { Colors } from "@/constants/Colors";
import { ReactNode, useState } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from "react-native";

export type propTypes = {
  checked?: Boolean;
  setChecked?: React.Dispatch<React.SetStateAction<boolean>>;
  style?: StyleProp<TextStyle>;
  disabled?: boolean;
  children?: ReactNode;
};

export default function Chip({
  checked = false,
  setChecked = () => {},
  style = {},
  disabled,
  children,
}: propTypes) {
  return (
    <Pressable
      style={{
        flexDirection: "row",
      }}
      onPress={() => setChecked(!checked)}
      disabled={disabled}
    >
      <Text style={[styles.chip, checked ? styles.chip_active : {}, style]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    color: Colors.dark.text,
    fontWeight: "600",
    borderRadius: 8,
    borderColor: "#2f2f2f",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  chip_active: {
    borderColor: Colors.dark.text,
    backgroundColor: "#2f2f2f",
  },
});
