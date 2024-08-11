import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CompletedOrderCard() {
  return (
    <View style={styles.box}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <Text style={[styles.counterText, { fontSize: 8 }]}>2 hrs ago</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 120,
    width: 120,
    backgroundColor: Colors.dark.background,
    padding: 12,
    borderRadius: 8,
  },
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
  },
  icon: {
    color: Colors.dark.icon,
    fontSize: 18,
    borderColor: Colors.dark.icon,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 2,
    paddingTop: 2,
  },
});
