import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CBButton from "../CBButton";
import { useContext, useState } from "react";
import OrderInfoCard from "../OrderInfoCard";
import { useStyle } from "@/hooks/useStyle";
import QuantitySelect from "../QuantitySelect";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigation } from "expo-router";

export default function OrderBS({ item }: any) {
  console.log(item);
  const [qty, setQty] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigation = useNavigation();

  const onSubmit: any = useMutation({
    mutationFn: (values: any) => {
      setIsSubmitting(true);
      values.user_id = "6702957c2a68d28a33bd7fae";
      values.is_custom = true;
      return axios.post("/order", values);
    },
    // TODO:show success message
    onSuccess: () => {
      navigation.goBack();
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  function handleSubmit(mutate: any): (() => void) | undefined {
    // throw new Error("Function not implemented.");
  }

  return (
    <View>
      <OrderInfoCard item={item} />
      <View style={{ padding: 16, gap: 16 }}>
        <QuantitySelect value={qty} onChange={setQty} />
        <CBButton
          onPress={handleSubmit(onSubmit.mutate)}
          loading={isSubmitting}
        >
          Order
        </CBButton>
      </View>
    </View>
  );
}
