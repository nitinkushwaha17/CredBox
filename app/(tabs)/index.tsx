import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Appbar from "@/components/appbar/Appbar";
import OrderCard from "@/components/OrderCard";
import CounterCard from "@/components/CounterCard";
import FAB from "@/components/FAB";
import { Link } from "expo-router";
import CompletedOrderCard from "@/components/CompletedOrderCard";
import { useState, useCallback, useEffect } from "react";
import { useStyle } from "@/hooks/useStyle";
import { useQuery } from "@tanstack/react-query";
import axios from "@/axios";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);

  const styles: any = useStyle(style);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getAllCountersQuery.refetch();
    getRecentlyCompletedOrdersQuery.refetch();
    getRecentOrdersQuery.refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const currentUser = useCurrentUser();

  const getAllCountersQuery = useQuery({
    queryKey: ["allCounters"],
    queryFn: async () => {
      return await axios.get("/counter/all", {
        params: {
          user_id: currentUser,
          // cafeteria_id: "6779719d5215524013d69f60",
        },
      });
    },
  });

  const getRecentlyCompletedOrdersQuery = useQuery({
    queryKey: ["recentlyCompletedOrders"],
    queryFn: async () => {
      return await axios.get("/order/my", {
        params: {
          user_id: currentUser,
          num: 8,
          type: "completed",
        },
      });
    },
  });

  const getRecentOrdersQuery = useQuery({
    queryKey: ["recentOrders"],
    queryFn: async () => {
      return await axios.get("/order/my", {
        params: {
          user_id: currentUser,
          num: 8,
          type: "recent",
        },
      });
    },
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar />
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 16 }}
        contentContainerStyle={{ gap: 32, paddingTop: 24 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={styles.heading}>Recently Ordered</Text>
          <ScrollView
            horizontal
            contentContainerStyle={styles.contentContainer}
          >
            {getRecentOrdersQuery.data?.data.map((item: any) => (
              <OrderCard item={item} key={item.id} />
            ))}
          </ScrollView>
        </View>

        <View>
          <Text style={styles.heading}>Explore Counters</Text>
          {getAllCountersQuery.data ? (
            <View style={[styles.contentContainer, { gap: 0 }]}>
              {getAllCountersQuery.data.data.map(
                (counter: any, idx: number) => (
                  <CounterCard counter={counter} key={idx} />
                )
              )}
            </View>
          ) : (
            <ActivityIndicator size="large" />
          )}
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
            {getRecentlyCompletedOrdersQuery.data?.data.map((item: any) => (
              <CompletedOrderCard item={item} key={item.id} />
            ))}
          </ScrollView>
        </View>

        <View style={{ height: 200 }}></View>
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
