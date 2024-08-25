import { ScrollView, StyleSheet, Text, View } from "react-native";
import RequestCard from "./RequestCard";

export default function MyRequestsTab() {
  return (
    <View style={{ padding: 16 }}>
      <ScrollView contentContainerStyle={{ gap: 8, marginTop: 16 }}>
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
