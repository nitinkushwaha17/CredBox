import { ThemeContext } from "@/contexts/ThemeContext";
import RequestsBS from "@/components/bottom_sheet/RequestsBS";
import CBBottomSheet from "@/components/CBBottomSheet";
import Chip from "@/components/Chip";
import RequestCard from "@/components/RequestCard";
import { useStyle } from "@/hooks/useStyle";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import axios from "@/axios";

const initialCheckedArray = [true, false, false];
const Options = ["All", "Accepted by me", "Completed by me"];
const snapPoints = ["25%", "50%"];

export default function AllRequestsTab() {
  const styles = useStyle(style);

  const [checked, setChecked] = useState<boolean[]>(initialCheckedArray);
  // const bsref = useRef<BottomSheetModal>(null);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const { isPending, error, data, isFetching, refetch } = useQuery({
    queryKey: ["allRequests"],
    queryFn: async () => {
      return await axios.get("/order/all", {
        params: {
          user_id: "6702957c2a68d28a33bd7fae",
        },
      });
    },
  });

  useEffect(() => console.log("all requests:", data?.data), [data]);

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

  if (isPending) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ScrollView
          horizontal
          contentContainerStyle={{
            gap: 8,
            paddingVertical: 16,
          }}
        >
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
        <Ionicons name="filter-outline" style={styles.filterIcon} />
      </View>
      <ScrollView
        contentContainerStyle={{ gap: 8 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        {data?.data.map((data: any, idx: number) => (
          <RequestCard key={idx} data={data} />
        ))}
        {/* <RequestCard />
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
        <RequestCard /> */}
        <View style={{ height: 200 }} />
      </ScrollView>
      {/* <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
        <RequestsBS theme={theme} />
      </CBBottomSheet> */}
    </View>
  );
}

const style = (Colors: any) =>
  StyleSheet.create({
    filterIcon: {
      color: Colors.text,
      fontSize: 16,
      paddingVertical: 16,
      paddingHorizontal: 8,
    },
  });
