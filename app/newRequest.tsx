import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import CBButton from "@/components/CBButton";

export default function newRequest() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "New Request" });
  }, []);

  return (
    <ScrollView
      style={{ flex: 1, padding: 16 }}
      contentContainerStyle={{
        gap: 16,
        paddingBottom: 50,
      }}
    >
      <Image
        source={require("@/assets/images/knife-fork.png")}
        style={{ width: 250, height: 250, margin: "auto" }}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Counter</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Item</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Price</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={3}
        />
      </View>
      <CBButton containerStyle={{ marginTop: 8 }}>Submit</CBButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  inputContainer: {
    gap: 8,
  },
  input: {
    color: Colors.dark.text,
    backgroundColor: "rgb(20, 20, 20)",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "400",
  },
});
