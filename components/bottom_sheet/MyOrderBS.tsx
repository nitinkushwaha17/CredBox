import { StyleSheet, Text, View } from "react-native";
import RequestCard from "../RequestCard";
import QRCode from "react-native-qrcode-svg";
import { Colors } from "@/constants/Colors";
import CBButton from "../CBButton";
import OrderInfoCard from "../OrderInfoCard";
import { useStyle } from "@/hooks/useStyle";
import { useGlobalStore } from "@/store";

export type OrderStatus = "new" | "in-process" | "completed";
interface MyOrderBSProps {
  infoCardData?: any;
  status?: OrderStatus;
}

export default function MyOrderBS({
  infoCardData,
  status = "new",
}: MyOrderBSProps) {
  const theme = useGlobalStore((state) => state.theme);
  const styles = useStyle(style);

  return (
    <View>
      <OrderInfoCard item={infoCardData} />
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
