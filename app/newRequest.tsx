import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import CBButton from "@/components/CBButton";
import { useStyle } from "@/hooks/useStyle";
import Chip from "@/components/Chip";

export default function newRequest() {
  const navigation = useNavigation();
  const styles = useStyle(style);

  const [checked, setChecked] = useState<number>(0);

  const Options = [
    "Early Breakfast",
    "Breakfast",
    "Lunch",
    "Snacks",
    "Dinner",
    "All Day",
  ];

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
        style={{ width: 200, height: 200, margin: "auto" }}
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
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Time of day</Text>
        <View style={{ flexDirection: "row", gap: 16, flexWrap: "wrap" }}>
          {Options.map((option, idx) => (
            <Chip
              key={idx}
              checked={idx == checked}
              setChecked={() => setChecked(idx)}
            >
              {option}
            </Chip>
          ))}
        </View>
      </View>
      <CBButton containerStyle={{ marginTop: 8 }}>Submit</CBButton>
    </ScrollView>
  );
}

const style = (Colors: any) =>
  StyleSheet.create({
    heading: {
      fontSize: 18,
      color: Colors.text,
      fontWeight: "600",
    },
    inputContainer: {
      gap: 8,
    },
    input: {
      color: Colors.text,
      backgroundColor: Colors.onBackground,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
      fontSize: 16,
      fontWeight: "400",
    },
  });
