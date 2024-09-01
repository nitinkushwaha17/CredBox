import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CBButton from "../CBButton";
import { useContext, useState } from "react";
import OrderInfoCard from "../OrderInfoCard";
import { useStyle } from "@/hooks/useStyle";
import { ThemeContext } from "@/app/_layout";

export default function OrderBS({ theme }: any) {
  const styles = useStyle(style, theme);

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
