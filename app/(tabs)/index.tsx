import { StyleSheet, View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Appbar from "@/components/appbar/Appbar";
import OrderCard from "@/components/OrderCard";
import CounterCard from "@/components/CounterCard";
import FAB from "@/components/FAB";
import { Link } from "expo-router";
import CompletedOrderCard from "@/components/CompletedOrderCard";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Appbar />
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 16 }}
        contentContainerStyle={{ gap: 32, paddingTop: 24 }}
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
            <Link
              href="/orderInfo"
              style={{
                color: "white",
                textDecorationLine: "underline",
                fontSize: 12,
              }}
            >
              Show All
            </Link>
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

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 32,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    gap: 12,
    marginTop: 12,
  },
  heading: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
});
