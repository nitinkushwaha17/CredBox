import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { useStyle } from "@/hooks/useStyle";

export default function CounterCard() {
  const styles = useStyle(style);
  return (
    <Link href="/counterInfo">
      <View style={styles.box}>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={{ height: 50, width: 50 }}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.name}>Meal O Pedia</Text>
          <Text style={styles.order}>2 pending requests</Text>
        </View>
      </View>
    </Link>
  );
}

const style = (Colors: any) =>
  StyleSheet.create({
    box: {
      borderRadius: 8,
      flexDirection: "row",
      padding: 12,
    },
    name: {
      fontSize: 16,
      color: Colors.text,
      fontWeight: "600",
    },
    order: {
      fontSize: 12,
      color: Colors.icon,
      fontWeight: "600",
    },
  });
