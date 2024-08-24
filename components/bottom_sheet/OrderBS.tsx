import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import CBButton from "../CBButton";
import { useState } from "react";
import OrderInfoCard from "../OrderInfoCard";

export default function OrderBS() {
  const [qty, setQty] = useState<string>("1");

  const validateAndSetQty = (num: string) => {
    let quantity = parseInt(num);
    if (isNaN(quantity)) return;

    quantity = Math.min(quantity, 5);
    quantity = Math.max(quantity, 1);

    setQty(quantity.toString());
  };

  return (
    <View>
      <OrderInfoCard />
      <View style={{ padding: 16, gap: 16 }}>
        <View style={styles.qtyContainer}>
          <Text style={styles.text}>Order Quantity: </Text>
          <View style={styles.controlsContainer}>
            <TouchableOpacity
              onPress={() => validateAndSetQty((parseInt(qty) - 1).toString())}
            >
              <Ionicons name="remove-outline" style={styles.controls} />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{qty}</Text>
            <TouchableOpacity
              onPress={() => validateAndSetQty((parseInt(qty) + 1).toString())}
            >
              <Ionicons name="add-outline" style={styles.controls} />
            </TouchableOpacity>
          </View>
        </View>
        <CBButton>Order</CBButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  qtyContainer: {
    marginHorizontal: "auto",
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgb(50, 50, 50)",
    borderRadius: 8,
  },
  controls: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "bold",
    padding: 8,
  },
  qtyText: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  text: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: "auto",
  },
});
