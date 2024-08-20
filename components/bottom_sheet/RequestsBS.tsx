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

export default function RequestsBS() {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [pin, setPin] = useState<string>("");

  const handleInput = useCallback(() => {
    setDisabled(pin.length !== 6);
  }, [pin]);

  return (
    <View>
      <RequestCard />
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

const styles = StyleSheet.create({
  text: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    color: Colors.dark.text,
    backgroundColor: "rgb(50, 50, 50)",
    padding: 16,
    textAlign: "center",
    borderRadius: 16,
    fontSize: 24,
    letterSpacing: 8,
    fontWeight: "500",
  },
});
