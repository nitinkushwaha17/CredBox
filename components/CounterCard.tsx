import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { useStyle } from "@/hooks/useStyle";

export default function CounterCard({ counter }: { counter: any }) {
  const styles = useStyle(style);
  return (
    <Link
      href={{
        pathname: "/counterInfo/[id]",
        params: {
          id: counter._id,
        },
      }}
    >
      <View style={styles.box}>
        <Image
          source={require("@/assets/images/menu.png")}
          style={{
            height: 100,
            width: 125,
            borderRadius: 8,
            objectFit: "cover",
          }}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.name}>{counter.name}</Text>
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
      paddingVertical: 12,
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
