import { StyleSheet, Text, View } from "react-native";
import RequestCard from "../RequestCard";
import QRCode from "react-native-qrcode-svg";
import { Colors } from "@/constants/Colors";
import CBButton from "../CBButton";

export interface MyOrderBSProps {
  status?: "new" | "in-process" | "completed";
}

export default function MyOrderBS({ status = "new" }: MyOrderBSProps) {
  return (
    <View>
      <RequestCard />
      {status === "completed" ? (
        <>
          <View style={styles.qrContainer}>
            <QRCode
              value="153235"
              backgroundColor="#1e1e1e"
              color="white"
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

const styles = StyleSheet.create({
  qrContainer: {
    marginHorizontal: "auto",
    marginVertical: 16,
  },
  pinText: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: "auto",
    letterSpacing: 5,
  },
});
