import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CBBottomSheet from "./CBBottomSheet";
import OrderBS from "./bottom_sheet/OrderBS";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useContext, useRef } from "react";
import { useStyle } from "@/hooks/useStyle";

const snapPoints = ["25%", "50%"];

export default function OrderCard({ item }: { item: any }) {
  const bsref = useRef<BottomSheetModal>(null);
  const styles = useStyle(style);

  return (
    <Pressable style={styles.box} onPress={() => bsref.current?.present()}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <Text style={styles.counterText}>{item.counter}</Text>
          <Text style={styles.itemText}>{item.item}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text style={styles.amountText}>Rs {item.price}</Text>
            <Text style={styles.todText}>{item.tod}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => bsref.current?.present()}
          >
            <Ionicons name="add" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
        <OrderBS item={item} />
      </CBBottomSheet>
    </Pressable>
  );
}

const style = (Colors: any) =>
  StyleSheet.create({
    box: {
      height: 120,
      width: 120,
      backgroundColor: Colors.onBackground,
      padding: 12,
      borderRadius: 8,
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
      fontSize: 12,
      fontWeight: "600",
      color: Colors.text,
    },
    todText: {
      fontSize: 12,
      color: "#00a6a4",
      textTransform: "capitalize",
    },
    icon: {
      color: Colors.icon,
      fontSize: 18,
      borderColor: Colors.icon,
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 2,
      paddingTop: 2,
    },
  });
