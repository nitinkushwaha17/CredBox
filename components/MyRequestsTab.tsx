import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RequestCard from "./RequestCard";
import { useState, useCallback, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "@/axios";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function MyRequestsTab() {
  const [refreshing, setRefreshing] = useState(false);

  const { isPending, error, data, isFetching, refetch } = useQuery({
    queryKey: ["myRequests"],
    queryFn: async () => {
      return await axios.get("/order/my", {
        params: {
          user_id: useCurrentUser(),
        },
      });
    },
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      style={{ padding: 16 }}
      contentContainerStyle={{ gap: 8 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
    >
      {data?.data.map((ele: any, idx: number) => (
        <RequestCard data={ele} myOrderCard key={idx} status={ele.status} />
      ))}
      <View style={{ height: 200 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
