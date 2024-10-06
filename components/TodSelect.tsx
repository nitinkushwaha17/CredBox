import { StyleSheet, Text, View } from "react-native";
import Chip from "./Chip";

interface TodOption {
  _id: string;
  name: string;
}

export default function TodSelect({
  checkedId,
  setChecked,
  options,
}: {
  checkedId: string;
  setChecked: (n: string) => void;
  options: TodOption[];
}) {
  // TODO: fetch options
  // const Options = [
  //   "All Day",
  //   "Early Breakfast",
  //   "Breakfast",
  //   "Lunch",
  //   "Snacks",
  //   "Dinner",
  // ];

  return (
    <View style={{ flexDirection: "row", gap: 16, flexWrap: "wrap" }}>
      {options.map((option: TodOption) => (
        <Chip
          key={option._id}
          checked={option._id == checkedId}
          setChecked={() => setChecked(option._id)}
          style={{ textTransform: "capitalize" }}
        >
          {option.name}
        </Chip>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
