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

export default function RequestsBS({ theme }: { theme: themeType }) {
  const styles = useStyle(style, theme);

  const [disabled, setDisabled] = useState<boolean>(true);
  const [pin, setPin] = useState<string>("");

  const handleInput = useCallback(() => {
    setDisabled(pin.length !== 6);
  }, [pin]);

  return (
    <View>
      <OrderInfoCard theme={theme} />
      <View style={{ marginTop: 16, padding: 16, gap: 16 }}>
        <View style={{ gap: 8 }}>
          <Text style={styles.text}>Order PIN</Text>
          <BottomSheetTextInput
            style={styles.input}
            maxLength={6}
            keyboardType="number-pad"
            onTextInput={handleInput}
            value={pin}
            onChangeText={setPin}
          />
        </View>
        <CBButton disabled={disabled} loading={disabled}>
          Submit
        </CBButton>
        {disabled && <CBButton>Accept</CBButton>}
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
