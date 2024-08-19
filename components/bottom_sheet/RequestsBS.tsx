import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RequestCard from "../RequestCard";
import { Colors } from "@/constants/Colors";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { useCallback, useRef, useState } from "react";

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
        <Pressable
          style={[styles.button, disabled ? styles.button_disabled : null]}
        >
          {disabled && <ActivityIndicator color={"white"} />}
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
        {disabled && (
          <Pressable style={styles.button}>
            {/* <ActivityIndicator color={"white"} /> */}
            <Text style={styles.buttonText}>Accept</Text>
          </Pressable>
        )}
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
  button: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    backgroundColor: Colors.dark.primary,
    padding: 12,
    borderRadius: 8,
  },
  button_disabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "600",
  },
});
