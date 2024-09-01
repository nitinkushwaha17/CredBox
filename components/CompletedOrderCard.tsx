import { Colors } from "@/constants/Colors";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CBBottomSheet from "./CBBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import MyOrderBS from "./bottom_sheet/MyOrderBS";
import { useStyle } from "@/hooks/useStyle";

const snapPoints = ["25%", "50%"];

export default function CompletedOrderCard() {
  const styles = useStyle(style);
  const bsref = useRef<BottomSheetModal>(null);
  return (
    <Pressable style={styles.box} onPress={() => bsref.current?.present()}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          {/* <Text style={[styles.counterText, { fontSize: 8 }]}>2 hrs ago</Text> */}
          <Text style={styles.counterText}>Meal O Pedia</Text>
          <Text style={styles.itemText}>Watermelon juice</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.amountText}>Rs. 100.00</Text>
        </View>
      </View>
      <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
        <MyOrderBS status="completed" />
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
