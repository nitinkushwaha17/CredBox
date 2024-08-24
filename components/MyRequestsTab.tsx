import { ScrollView, StyleSheet, Text, View } from "react-native";
import RequestCard from "./RequestCard";

export default function MyRequestsTab() {
  return (
    <View style={{ padding: 16 }}>
      <ScrollView contentContainerStyle={{ gap: 8, marginTop: 16 }}>
        <RequestCard status="completed" />
        <RequestCard status="in-process" />
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
