import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Chip from "./Chip";
import { Ionicons } from "@expo/vector-icons";

export default function RequestCard({ onPress }: PressableProps) {
  return (
    <Pressable
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "rgb(50, 50, 50)",
        // borderRadius: 8,
        padding: 16,
      }}
      onPress={onPress}
    >
      <View
        style={{
          marginBottom: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <StatusChip status="completed" />
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Ionicons
            style={{ color: "#e5e566", fontSize: 12 }}
            name="time-outline"
          />
          <Text style={{ color: "#e5e566", fontWeight: "600", fontSize: 12 }}>
            3:55
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.counterText}>Meal O Pedia</Text>
          <Text style={styles.itemText}>Watermelon juice</Text>
        </View>
        <View>
          <Text style={styles.amountText}>Rs. 100.00</Text>
          {/* <Text
            style={[
              styles.counterText,
              { fontSize: 8, marginLeft: "auto", paddingTop: 8 },
            ]}
          >
            2 hrs ago
            </Text> */}
          {/* <Chip
            style={{
              backgroundColor: "#15e51565",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 8,
              marginTop: 8,
              fontSize: 10,
            }}
          >
            Breakfast
          </Chip> */}
          <View style={{ marginLeft: "auto" }}>
            <TODChip />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const TOD = {
  earlyBreakfast: {
    label: "Early Breakfast",
    color: "#00e6c4",
  },
  breakfast: {
    label: "Breakfast",
    color: "#00e6c4",
  },
  lunch: {
    label: "Lunch",
    color: "#00e6c4",
  },
  snacks: {
    label: "Snacks",
    color: "#00e6c4",
  },
  dinner: {
    label: "Dinner",
    color: "#00e6c4",
  },
  allDay: {
    label: "All Day",
    color: "#00e6c4",
  },
};

const TODChip = () => {
  return (
    <Chip
      style={{
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: 8,
        // marginTop: 4,
        fontSize: 12,
        // borderColor: TOD.breakfast.color,
        borderWidth: 0,
        color: TOD.breakfast.color,
        fontWeight: "400",
        // backgroundColor: "#00e6c440",
      }}
    >
      {TOD.earlyBreakfast.label}
    </Chip>
  );
};

const StatusChip = ({ status }: { status: string }) => {
  return (
    <Chip
      style={{
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        fontSize: 10,
        // borderColor: "#e5e566",
        color: status === "inProcess" ? "#e5e566" : "#00e6c4",
        backgroundColor: status === "inProcess" ? "#e5e56640" : "#00e6c440",
        borderWidth: 0,
      }}
    >
      {status === "inProcess" ? "In Process" : "Completed"}
    </Chip>
  );
};

const styles = StyleSheet.create({
  counterText: {
    fontSize: 12,
    color: Colors.dark.icon,
    fontWeight: "600",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.dark.text,
  },
  amountText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.dark.text,
    marginLeft: "auto",
  },
});
