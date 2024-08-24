import AllRequestsTab from "@/components/AllRequestsTab";
import MyRequestsTab from "@/components/MyRequestsTab";
import RequestsTabView from "@/components/navigation/RequestsTabView";
import { SceneMap } from "react-native-tab-view";

const scenes = SceneMap({
  first: AllRequestsTab,
  second: MyRequestsTab,
});

const routes = [
  { key: "first", title: "All" },
  { key: "second", title: "My" },
];

export default function requests() {
  return <RequestsTabView routes={routes} renderScene={scenes} />;
}
