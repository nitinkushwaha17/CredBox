import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CBButton from "../CBButton";
import { useContext, useState } from "react";
import OrderInfoCard from "../OrderInfoCard";
import { useStyle } from "@/hooks/useStyle";
import QuantitySelect from "../QuantitySelect";
import { useMutation } from "@tanstack/react-query";
import axios from "@/axios";
import { useNavigation } from "expo-router";
import { useGlobalStore } from "@/store";
import { RefContext } from "@/contexts/RefContext";

export default function OrderBS({ item }: any) {
  console.log(item);
  const [qty, setQty] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const ref = useContext(RefContext);

  const tod = useGlobalStore((state) => state.tod?.id);

  const onSubmit: any = useMutation({
    mutationFn: (itemId: any) => {
      console.log("itemId:", itemId);
      setIsSubmitting(true);
      const data = {
        user_id: "6702957c2a68d28a33bd7fae",
        item_id: itemId,
      };
      return axios.post("/order", data);
    },
    // TODO:show success message
    onSuccess: () => {
      ref.current.dismiss();
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  function handleSubmit() {
    // item_id for recently completed card
    onSubmit.mutate(item.item_id ?? item.id);
  }

  return (
    <View>
      <OrderInfoCard item={item} />
      <View style={{ padding: 16, gap: 16 }}>
        <QuantitySelect value={qty} onChange={setQty} />
        <CBButton
          onPress={handleSubmit}
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Order
        </CBButton>
      </View>
    </View>
  );
}
