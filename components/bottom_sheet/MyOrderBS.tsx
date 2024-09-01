import { StyleSheet, Text, View } from "react-native";
import RequestCard from "../RequestCard";
import QRCode from "react-native-qrcode-svg";
import { Colors } from "@/constants/Colors";
import CBButton from "../CBButton";
import OrderInfoCard from "../OrderInfoCard";
import { useStyle } from "@/hooks/useStyle";

export type OrderStatus = "new" | "in-process" | "completed";
interface MyOrderBSProps {
  status?: OrderStatus;
  theme: "light" | "dark";
}

export default function MyOrderBS({ status = "new", theme }: MyOrderBSProps) {
  const styles = useStyle(style, theme);

  return (
    <View>
      <OrderInfoCard theme={theme} />
      {status === "completed" ? (
        <>
          <View style={styles.qrContainer}>
            <QRCode
              value="153235"
              backgroundColor={Colors[theme].background}
              color={Colors[theme].text}
              size={150}
            />
          </View>
          <Text style={styles.pinText}>PIN: 153235</Text>
        </>
      ) : (
        <View style={{ padding: 16, gap: 16 }}>
          <CBButton>Update</CBButton>
          <CBButton containerStyle={{ backgroundColor: "red" }}>
            Delete
          </CBButton>
        </View>
      )}
    </View>
  );
}

const style = (Colors: any) =>
  StyleSheet.create({
    qrContainer: {
      marginHorizontal: "auto",
      marginVertical: 16,
    },
    pinText: {
      color: Colors.text,
      fontSize: 16,
      fontWeight: "bold",
      marginHorizontal: "auto",
      letterSpacing: 5,
    },
  });
