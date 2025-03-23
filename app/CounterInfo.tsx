import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import OrderBS from "@/components/bottom_sheet/OrderBS";
import CBBottomSheet from "@/components/CBBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useStyle } from "@/hooks/useStyle";

export default function CounterInfo() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Meal O Pedia" });
  }, [navigation]);

  return (
    <ScrollView>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <View style={{ height: 200 }}></View>
    </ScrollView>
  );
}

interface ItemCardProps {
  item?: {
    name: string;
    amount: number;
  };
}

const snapPoints = ["25%", "50%"];

function ItemCard({ item }: ItemCardProps) {
  const styles = useStyle(style);

  const bsref = useRef<BottomSheetModal>(null);
  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() => bsref.current?.present()}
    >
      <Text style={[styles.itemCardText, { flex: 1, flexWrap: "wrap" }]}>
        Veg Buffet
      </Text>
      <Text style={[styles.itemCardText, styles.priceText]}>Rs 100.00</Text>

      <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
        <OrderBS />
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
      paddingHorizontal: 16,
      paddingVertical: 48,
      marginHorizontal: 32,
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
  });
