import { StyleSheet, Text, View } from "react-native";
import Chip from "./Chip";

export default function TodSelect({
  checkedIdx,
  setChecked,
}: {
  checkedIdx: number;
  setChecked: (n: number) => void;
}) {
  // TODO: fetch options
  const Options = [
    "All Day",
    "Early Breakfast",
    "Breakfast",
    "Lunch",
    "Snacks",
    "Dinner",
  ];

  return (
    <View style={{ flexDirection: "row", gap: 16, flexWrap: "wrap" }}>
      {Options.map((option, idx) => (
        <Chip
          key={idx}
          checked={idx == checkedIdx}
          setChecked={() => setChecked(idx)}
        >
          {option}
        </Chip>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
