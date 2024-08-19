import RequestsBS from "@/components/bottom_sheet/RequestsBS";
import CBBottomSheet from "@/components/CBBottomSheet";
import Chip from "@/components/Chip";
import RequestCard from "@/components/RequestCard";
import { Ionicons } from "@expo/vector-icons";
import { useCallback, useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const initialCheckedArray = [true, false, false];
const Options = ["All", "Accepted by me", "Completed by me"];
const snapPoints = ["25%", "50%"];

export default function requests() {
  const [checked, setChecked] = useState<boolean[]>(initialCheckedArray);
  const bsref = useRef(null);

  const setChip = useCallback(
    (idx: number) => {
      let newChecked = [...checked];
      newChecked[idx] = !newChecked[idx];
      for (let i = 0; i < newChecked.length; i++) {
        if (i !== idx) newChecked[i] = false;
      }
      if (!newChecked[idx]) newChecked[0] = true;
      setChecked(newChecked);
    },
    [checked]
  );

  return (
    <View style={{ padding: 16 }}>
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ScrollView horizontal contentContainerStyle={{ gap: 8 }}>
          {Options.map((option, idx) => (
            <Chip
              key={idx}
              checked={checked[idx]}
              setChecked={() => setChip(idx)}
            >
              {option}
            </Chip>
          ))}
        </ScrollView>
        <Ionicons
          name="filter-outline"
          style={{ color: "white", fontSize: 16 }}
          onPress={() => {
            bsref.current.present();
          }}
        />
      </View>
      <ScrollView contentContainerStyle={{ gap: 8, marginTop: 16 }}>
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
        <RequestCard />
        <View style={{ height: 200 }} />
      </ScrollView>
      <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
        <RequestsBS />
      </CBBottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({});
