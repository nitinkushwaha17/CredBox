import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RequestCard from "../RequestCard";
import { Colors } from "@/constants/Colors";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useCallback, useRef, useState } from "react";
import CBButton from "../CBButton";
import OrderInfoCard from "../OrderInfoCard";
import { useStyle } from "@/hooks/useStyle";
import { themeType } from "@/app/_layout";
import { useMutation } from "@tanstack/react-query";
import axios from "@/axios";

export default function RequestsBS({ infoCardData }: { infoCardData: any }) {
  const styles = useStyle(style);

  const [disabled, setDisabled] = useState<boolean>(true);
  const [disabledAccept, setDisabledAccept] = useState<boolean>(false);
  const [pin, setPin] = useState<string>("");

  const handleInput = useCallback((text: string) => {
    setPin(text);
    setDisabled(text.length !== 6);
  }, []);

  console.log("test:", infoCardData);

  const onAccept: any = useMutation({
    mutationFn: () => {
      let values = {};
      values.user_id = "6702957c2a68d28a33bd7fae";
      // values.is_custom = true;
      values.order_id = infoCardData.id;
      return axios.post("/order/accept", values);
    },
    // TODO:show success message
    onSuccess: () => {
      setDisabledAccept(true);
    },
    onSettled: () => {
      return;
    },
  });

  return (
    <View>
      <OrderInfoCard data={infoCardData} />
      <View style={{ marginTop: 16, padding: 16, gap: 16 }}>
        <View style={{ gap: 8 }}>
          <Text style={styles.text}>Order PIN</Text>
          <BottomSheetTextInput
            style={styles.input}
            maxLength={6}
            keyboardType="number-pad"
            value={pin}
            onChangeText={(text) => handleInput(text)}
          />
        </View>
        <CBButton disabled={disabled} loading={disabled}>
          Submit
        </CBButton>
        {!disabledAccept && (
          <CBButton onPress={onAccept.mutate}>Accept</CBButton>
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
