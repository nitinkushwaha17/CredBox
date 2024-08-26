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
    <View style={{ padding: 16 }}>
      <ScrollView
        contentContainerStyle={{ gap: 8, marginTop: 16 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
    </View>
  );
}

const styles = StyleSheet.create({});
