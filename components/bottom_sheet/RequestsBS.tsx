import {
  ActivityIndicator,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RequestCard from "../RequestCard";
import { Colors } from "@/constants/Colors";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useCallback, useContext, useRef, useState } from "react";
import CBButton from "../CBButton";
import OrderInfoCard from "../OrderInfoCard";
import { useStyle } from "@/hooks/useStyle";
import { themeType } from "@/app/_layout";
import { useMutation } from "@tanstack/react-query";
import axios from "@/axios";
import { RefContext } from "@/contexts/RefContext";

export default function RequestsBS({ infoCardData }: { infoCardData: any }) {
  const styles = useStyle(style);
  const ref = useContext(RefContext);

  const [disabled, setDisabled] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isAccepted, setIsAccepted] = useState<boolean>(
    infoCardData.status === "in process"
  );
  const [pin, setPin] = useState<string>("");

  const handleInput = useCallback((text: string) => {
    setPin(text);
    setDisabled(text.length !== 6);
    if (text.length == 6) Keyboard.dismiss();
  }, []);

  const onAccept: any = useMutation({
    mutationFn: () => {
      let values = {};
      values.user_id = "6702957c2a68d28a33bd7fae";
      // values.is_custom = true;
      values.order_id = infoCardData.id;
      setIsSubmitting(true);
      return axios.post("/order/accept", values);
    },
    // TODO:show success message
    onSuccess: () => {
      setIsAccepted(true);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onPinSubmit: any = useMutation({
    mutationFn: () => {
      let values = {
        user_id: "6702957c2a68d28a33bd7fae",
        order_id: infoCardData.id,
        pin: pin,
      };
      setIsSubmitting(true);
      return axios.post("/order/complete", values);
    },
    // TODO:show success message
    onSuccess: () => {
      ref.current.dismiss();
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  return (
    <View>
      <OrderInfoCard item={infoCardData} />
      <View style={{ marginTop: 16, padding: 16, gap: 16 }}>
        {isAccepted ? (
          <>
            <Text style={styles.text}>Order PIN</Text>
            <View style={{ gap: 8 }}>
              <BottomSheetTextInput
                style={styles.input}
                maxLength={6}
                keyboardType="number-pad"
                value={pin}
                onChangeText={(text) => handleInput(text)}
              />
            </View>
            <CBButton
              disabled={disabled || isSubmitting}
              loading={isSubmitting}
              onPress={onPinSubmit.mutate}
            >
              Submit
            </CBButton>
          </>
        ) : (
          <CBButton
            onPress={onAccept.mutate}
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            Accept
          </CBButton>
        )}
      </View>
    </View>
  );
}

const style = (Colors: any) =>
  StyleSheet.create({
    text: {
      color: Colors.text,
      fontSize: 16,
      fontWeight: "600",
    },
    input: {
      color: Colors.text,
      backgroundColor: Colors.onBackground,
      padding: 16,
      textAlign: "center",
      borderRadius: 16,
      fontSize: 24,
      letterSpacing: 8,
      fontWeight: "500",
    },
  });
