import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { Colors } from "@/constants/Colors";

interface CBButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  disabled?: boolean;
  loaderColor?: string;
  onPress?: () => void;
  children: string;
}

export default function CBButton({
  containerStyle,
  textStyle,
  loading = false,
  disabled = false,
  loaderColor = "white",
  onPress = () => {},
  children,
}: CBButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        containerStyle,
        disabled ? styles.button_disabled : null,
      ]}
      activeOpacity={0.8}
      onPress={!disabled ? onPress : () => {}}
    >
      {loading && <ActivityIndicator color={loaderColor} />}
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
