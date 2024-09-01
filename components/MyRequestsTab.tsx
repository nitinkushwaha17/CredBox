import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RequestCard from "./RequestCard";
import { useState, useCallback } from "react";

export default function MyRequestsTab() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
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
      <RequestCard myOrderCard status="completed" />
      <RequestCard myOrderCard status="in-process" />
      <RequestCard myOrderCard />
      <RequestCard myOrderCard />
      <RequestCard myOrderCard />
      <RequestCard myOrderCard />
      <RequestCard myOrderCard />
      <RequestCard myOrderCard />
      <RequestCard myOrderCard />
      <RequestCard myOrderCard />
      <RequestCard myOrderCard />
      <RequestCard myOrderCard />
      <RequestCard myOrderCard />
      <View style={{ height: 200 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
