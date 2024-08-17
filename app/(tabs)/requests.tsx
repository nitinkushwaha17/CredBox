import Chip from "@/components/Chip";
import RequestCard from "@/components/RequestCard";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

let initialCheckedArray = [true, false, false];
let Options = ["All", "Accepted by me", "Completed by me"];

export default function requests() {
  const [checked, setChecked] = useState<boolean[]>(initialCheckedArray);

  const setChip = (idx: number) => {
    let newChecked = [...checked];
    newChecked[idx] = !newChecked[idx];
    for (let i = 0; i < newChecked.length; i++) {
      if (i !== idx) newChecked[i] = false;
    }
    if (!newChecked[idx]) newChecked[0] = true;
    setChecked(newChecked);
  };

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
        {/* <Ionicons
          name="filter-outline"
          style={{ color: "white", fontSize: 16 }}
        /> */}
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
    </View>
  );
}

const styles = StyleSheet.create({});
