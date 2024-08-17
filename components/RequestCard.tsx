import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Chip from "./Chip";

export default function RequestCard() {
  return (
    <View
      style={{
        borderWidth: 1,
        borderBottomColor: "gray",
        borderRadius: 8,
        padding: 8,
      }}
    >
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
    </View>
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
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        marginTop: 8,
        fontSize: 10,
        borderColor: TOD.breakfast.color,
        color: TOD.breakfast.color,
        backgroundColor: "#00e6c440",
      }}
    >
      {TOD.earlyBreakfast.label}
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
    fontSize: 12,
    fontWeight: "600",
    color: Colors.dark.text,
    marginLeft: "auto",
  },
});
