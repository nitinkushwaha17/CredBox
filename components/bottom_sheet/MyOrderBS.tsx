import { StyleSheet, Text, View } from "react-native";
import RequestCard from "../RequestCard";
import QRCode from "react-native-qrcode-svg";
import { Colors } from "@/constants/Colors";
import CBButton from "../CBButton";
import OrderInfoCard from "../OrderInfoCard";
import { useStyle } from "@/hooks/useStyle";
import { useGlobalStore } from "@/store";
import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import axios from "@/axios";
import { RefContext } from "@/contexts/RefContext";

export type OrderStatus = "new" | "in process" | "completed";
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
  const ref = useContext(RefContext);

  console.log("infocarddata:", infoCardData, ref);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: any = useMutation({
    mutationFn: () => {
      console.log(infoCardData.id);
      setIsSubmitting(true);
      const data = {
        user_id: "6702957c2a68d28a33bd7fae",
        order_id: infoCardData.id,
      };
      return axios.post("/order/delete", data);
    },
    // TODO:show success message
    onSuccess: () => {
      ref.current.dismiss();
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  function handleSubmit() {
    onSubmit.mutate();
  }

  return (
    <View>
      <OrderInfoCard item={infoCardData} />
      {status === "completed" ? (
        <>
          <View style={styles.qrContainer}>
            <QRCode
              value={infoCardData.pin}
              backgroundColor={Colors[theme].background}
              color={Colors[theme].text}
              size={150}
            />
          </View>
          <Text style={styles.pinText}>PIN: {infoCardData.pin}</Text>
        </>
      ) : (
        <View style={{ padding: 16, gap: 16 }}>
          <CBButton>Update</CBButton>
          <CBButton
            containerStyle={{ backgroundColor: "red" }}
            onPress={handleSubmit}
            loading={isSubmitting}
          >
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
