import AllRequestsTab from "@/components/AllRequestsTab";
import MyRequestsTab from "@/components/MyRequestsTab";
import RequestsTabView from "@/components/navigation/RequestsTabView";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { SceneMap } from "react-native-tab-view";
import { TabActions } from "@react-navigation/native";

const scenes = SceneMap({
  first: AllRequestsTab,
  second: MyRequestsTab,
});

const routes = [
  { key: "first", title: "All" },
  { key: "second", title: "My" },
];

export default function requests() {
  // const { tab } = useLocalSearchParams();

  return <RequestsTabView routes={routes} renderScene={scenes} />;
}
