import { StyleSheet, Text, View } from "react-native";
import RequestCard from "../RequestCard";
import QRCode from "react-native-qrcode-svg";
import { Colors } from "@/constants/Colors";

export default function CompletedOrderBS() {
  return (
    <View>
      <RequestCard />
      <View style={styles.qrContainer}>
        <QRCode
          value="153235"
          backgroundColor="#1e1e1e"
          color="white"
          size={150}
        />
      </View>
      <Text style={styles.pinText}>PIN: 153235</Text>
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
