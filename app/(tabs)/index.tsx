import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Appbar from "@/components/appbar/Appbar";
import OrderCard from "@/components/OrderCard";
import CounterCard from "@/components/CounterCard";
import FAB from "@/components/FAB";
import { Link } from "expo-router";
import CompletedOrderCard from "@/components/CompletedOrderCard";
import { useState, useCallback } from "react";
import { useStyle } from "@/hooks/useStyle";

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);

  const styles: any = useStyle(style);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar />
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 16 }}
        contentContainerStyle={{ gap: 32, paddingTop: 24 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View>
          <Text style={styles.heading}>Recently Ordered</Text>
          <ScrollView
            horizontal
            contentContainerStyle={styles.contentContainer}
          >
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </ScrollView>
        </View>

        <View>
          <Text style={styles.heading}>Explore Counters</Text>
          <View style={[styles.contentContainer, { gap: 0 }]}>
            <CounterCard />
            <CounterCard />
            <CounterCard />
            <CounterCard />
            <CounterCard />
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.heading}>Recently Completed</Text>
            {/* <Link
              href={{ pathname: "/requests", params: { tab: "my" } }}
              style={{
                color: "white",
                textDecorationLine: "underline",
                fontSize: 12,
                padding: 8,
              }}
            >
              Show All
            </Link> */}
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.contentContainer}
          >
            <CompletedOrderCard />
            <CompletedOrderCard />
            <CompletedOrderCard />
            <CompletedOrderCard />
            <CompletedOrderCard />
            <CompletedOrderCard />
            <CompletedOrderCard />
          </ScrollView>
        </View>

        <View style={{ height: 300 }}></View>
      </ScrollView>
      <FAB />
    </SafeAreaView>
  );
}

const style = (Colors: any) =>
  StyleSheet.create({
    contentContainer: {
      gap: 12,
      marginTop: 12,
    },
    heading: {
      fontSize: 18,
      color: Colors.text,
      fontWeight: "600",
    },
  });
