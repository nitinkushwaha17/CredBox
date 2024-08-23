import { ScrollView, StyleSheet, Text, View } from "react-native";
import RequestCard from "./RequestCard";
import CBBottomSheet from "./CBBottomSheet";
import { useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CompletedOrderBS from "./bottom_sheet/CompletedOrderBS";

const snapPoints = ["25%", "50%"];

export default function MyRequestsTab() {
  const bsref = useRef<BottomSheetModal>(null);

  return (
    <View style={{ padding: 16 }}>
      <ScrollView contentContainerStyle={{ gap: 8, marginTop: 16 }}>
        <RequestCard
          onPress={() => {
            bsref.current?.present();
          }}
        />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <View style={{ height: 200 }} />
      </ScrollView>

      <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
        <CompletedOrderBS />
      </CBBottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({});
