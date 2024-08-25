import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import OrderBS from "@/components/bottom_sheet/OrderBS";
import CBBottomSheet from "@/components/CBBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export default function orderInfo() {
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
  const bsref = useRef<BottomSheetModal>(null);
  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 24,
        marginHorizontal: 32,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(50, 50, 50)",
        gap: 32,
        // flex: 1,
      }}
      onPress={() => bsref.current?.present()}
    >
      <Text style={[styles.itemCardText, { flex: 1, flexWrap: "wrap" }]}>
        Veg Buffet
      </Text>
      <Text style={[styles.itemCardText, { fontWeight: "600", fontSize: 14 }]}>
        Rs 100.00
      </Text>

      <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
        <OrderBS />
      </CBBottomSheet>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemCardText: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "400",
  },
});
