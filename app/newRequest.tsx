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
import { useStyle } from "@/hooks/useStyle";

export default function newRequest() {
  const navigation = useNavigation();

  const style = useStyle(styles);

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
      <View style={style.inputContainer}>
        <Text style={style.heading}>Counter</Text>
        <TextInput style={style.input} />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.heading}>Item</Text>
        <TextInput style={style.input} />
      </View>
      <View style={style.inputContainer}>
        <Text style={style.heading}>Price</Text>
        <TextInput
          style={style.input}
          keyboardType="number-pad"
          maxLength={3}
        />
      </View>
      <CBButton containerStyle={{ marginTop: 8 }}>Submit</CBButton>
    </ScrollView>
  );
}

const styles = (Colors: any) =>
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
