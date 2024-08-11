import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View, Image } from "react-native";
import ReactLogo from "@/assets/images/react-logo.png";

export default function CounterCard() {
  return (
    <View style={styles.box}>
      <Image source={ReactLogo} style={{ height: 50, width: 50 }} />
      <View style={{ marginLeft: 12 }}>
        <Text style={styles.name}>Meal O Pedia</Text>
        <Text style={styles.order}>2 pending requests</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderRadius: 8,
    // backgroundColor: Colors.dark.background,
    flexDirection: "row",
    padding: 12,
  },
  name: {
    fontSize: 16,
    color: Colors.dark.text,
    fontWeight: "600",
  },
  order: {
    fontSize: 12,
    color: Colors.dark.icon,
    fontWeight: "600",
  },
});
