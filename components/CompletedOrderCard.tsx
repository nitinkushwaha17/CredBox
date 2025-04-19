import { Colors } from "@/constants/Colors";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CBBottomSheet from "./CBBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useContext, useRef } from "react";
import MyOrderBS from "./bottom_sheet/MyOrderBS";
import { useStyle } from "@/hooks/useStyle";
import { ThemeContext } from "@/contexts/ThemeContext";

const snapPoints = ["25%", "50%"];

export default function CompletedOrderCard({ item }: { item: any }) {
  const styles = useStyle(style);
  const bsref = useRef<BottomSheetModal>(null);
  return (
    <Pressable style={styles.box} onPress={() => bsref.current?.present()}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          {/* <Text
            style={[styles.counterText, { fontSize: 8, marginLeft: "auto" }]}
          >
            2 hrs ago
          </Text> */}
          <Text style={styles.counterText}>{item.counter}</Text>
          <Text style={styles.itemText}>{item.item}</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            // justifyContent: "space-between",
            // alignItems: "center",
            // gap: 20,
          }}
        >
          <Text style={styles.amountText}>Rs {item.price}</Text>
          <Text style={styles.todText}>{item.tod}</Text>
        </View>
      </View>
      <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
        <MyOrderBS status="completed" infoCardData={item} />
      </CBBottomSheet>
    </Pressable>
  );
}

const style = (Colors: any) =>
  StyleSheet.create({
    box: {
      minHeight: 120,
      minWidth: 120,
      maxWidth: 150,
      maxHeight: 150,
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
      // marginLeft: "auto",
      textTransform: "capitalize",
      // overflow: "scroll",
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
