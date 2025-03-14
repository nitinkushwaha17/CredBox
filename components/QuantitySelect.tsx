import { useStyle } from "@/hooks/useStyle";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function QuantitySelect({
  value,
  onChange,
}: {
  value: number;
  onChange: (num: number) => void;
}) {
  const styles = useStyle(style);

  // const [qty, setQty] = useState<string>(`${value}`);

  const validateAndSetQty = (num: string) => {
    let quantity = parseInt(num);
    if (isNaN(quantity)) return;

    quantity = Math.min(quantity, 5);
    quantity = Math.max(quantity, 1);

    onChange(quantity);
  };

  return (
    <View style={styles.qtyContainer}>
      <Text style={styles.text}>Order Quantity: </Text>
      <View style={styles.controlsContainer}>
        <TouchableOpacity
          onPress={() => validateAndSetQty((value - 1).toString())}
        >
          <Ionicons name="remove-outline" style={styles.controls} />
        </TouchableOpacity>
        <Text style={styles.qtyText}>{value}</Text>
        <TouchableOpacity
          onPress={() => validateAndSetQty((value + 1).toString())}
        >
          <Ionicons name="add-outline" style={styles.controls} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = (Colors: any) =>
  StyleSheet.create({
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
      backgroundColor: Colors.onBackground,
      borderRadius: 8,
    },
    controls: {
      color: Colors.text,
      fontSize: 16,
      fontWeight: "bold",
      padding: 8,
    },
    qtyText: {
      color: Colors.text,
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
    },
    text: {
      color: Colors.text,
      fontSize: 16,
      fontWeight: "600",
      marginHorizontal: "auto",
    },
  });

export default QuantitySelect;
