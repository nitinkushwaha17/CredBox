import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams, useNavigation } from "expo-router";
import OrderBS from "@/components/bottom_sheet/OrderBS";
import CBBottomSheet from "@/components/CBBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useStyle } from "@/hooks/useStyle";
import { useQuery } from "@tanstack/react-query";
import axios from "@/axios";

export default function CounterInfo() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  const getAllItemsQuery = useQuery({
    queryKey: ["allItems"],
    queryFn: async () => {
      return await axios.get("/item/all", {
        params: {
          tod_id: "66f0718b8ed9d74ea1208a41",
          counter_id: id,
        },
      });
    },
  });

  useEffect(() => {
    navigation.setOptions({ title: "Meal O Pedia" });
  }, [navigation]);

  if (getAllItemsQuery.isPending) return <Text>Loading...</Text>;
  return (
    <ScrollView>
      {getAllItemsQuery.data?.data.map((item: any) => (
        <ItemCard item={item} key={item.id} />
      ))}
      <View style={{ height: 200 }}></View>
    </ScrollView>
  );
}

interface ItemCardProps {
  item: {
    item: string;
    price: number;
    id: string;
  };
}

const snapPoints = ["25%", "50%"];

function ItemCard({ item }: ItemCardProps) {
  const styles = useStyle(style);

  const bsref = useRef<BottomSheetModal>(null);

  console.log(item);
  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() => bsref.current?.present()}
      android_ripple={{ ...styles.ripple, foreground: true }}
    >
      <Text style={[styles.itemCardText, { flex: 1, flexWrap: "wrap" }]}>
        {item.item}
      </Text>
      <Text style={[styles.itemCardText, styles.priceText]}>
        Rs {item.price}
      </Text>

      <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
        <OrderBS item={item} />
      </CBBottomSheet>
    </Pressable>
  );
}

const style = (Colors: any) =>
  StyleSheet.create({
    cardContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 48,
      paddingVertical: 48,
      // marginHorizontal: 32,
      borderBottomWidth: 1,
      borderBottomColor: Colors.onBackground,
      gap: 32,
      // flex: 1,
    },
    itemCardText: {
      color: Colors.text,
      fontSize: 16,
      fontWeight: "400",
    },
    priceText: {
      fontWeight: "600",
      fontSize: 14,
      color: Colors.text2,
    },
    ripple: {
      color: Colors.rippleColor,
    },
  });
