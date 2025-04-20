import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef } from "react";
import { Colors } from "@/constants/Colors";
import Chip from "./Chip";
import { Ionicons } from "@expo/vector-icons";
import { OrderStatus } from "./bottom_sheet/MyOrderBS";
import { useStyle } from "@/hooks/useStyle";
import { themeType } from "@/app/_layout";

export default function OrderInfoCard({
  item,
  status = "new",
  onPress,
}: {
  item?: any;
  status?: OrderStatus;
  onPress?: (event: GestureResponderEvent) => void;
}) {
  const styles = useStyle(style);
  console.log("item:", item);

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View
        style={{
          marginBottom: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {status !== "new" && <StatusChip status={status} />}
        {status === "in process" && (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Ionicons
              style={{ color: "#e5e566", fontSize: 12 }}
              name="time-outline"
            />
            <Text style={{ color: "#e5e566", fontWeight: "600", fontSize: 12 }}>
              3:55
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.counterText}>
            {item?.counter ? item.counter : `Meal O Pedia`}
          </Text>
          <Text style={styles.itemText}>
            {item?.name ? item.name : `Watermelon juice`}
          </Text>
        </View>
        <View>
          <Text style={styles.amountText}>
            Rs. {item?.price ? item.price : 100.0}
          </Text>
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
            <Text style={styles.todText}>
              {item?.tod ? item.tod : "all day"}
            </Text>
            {/* <TODChip /> */}
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
      disabled
    >
      {TOD.earlyBreakfast.label}
    </Chip>
  );
};

const StatusChip = ({ status = "new" }: { status?: string }) => {
  return (
    <Chip
      style={{
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        fontSize: 10,
        // borderColor: "#e5e566",
        color: status === "in process" ? "#e5e566" : "#00e6c4",
        backgroundColor: status === "in process" ? "#e5e56640" : "#00e6c440",
        borderWidth: 0,
      }}
      disabled
    >
      {status === "in process"
        ? "In Process"
        : status === "completed"
        ? "Completed"
        : null}
    </Chip>
  );
};

const style = (Colors: any) =>
  StyleSheet.create({
    card: {
      borderBottomWidth: 1,
      borderBottomColor: Colors.onBackground,
      // borderRadius: 8,
      padding: 16,
    },
    counterText: {
      fontSize: 12,
      color: Colors.icon,
      fontWeight: "600",
    },
    itemText: {
      fontSize: 16,
      fontWeight: "600",
      color: Colors.text,
    },
    amountText: {
      fontSize: 14,
      fontWeight: "600",
      color: Colors.text,
      marginLeft: "auto",
    },
    todText: {
      fontSize: 14,
      // fontWeight: "600",
      color: "#00a6a4",
      marginLeft: "auto",
      textTransform: "capitalize",
    },
  });
