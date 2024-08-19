import * as React from "react";
import { View, useWindowDimensions, StyleSheet, Text } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import AllRequestsTab from "../allRequestsTab";
import OrderCard from "../OrderCard";
import { Colors } from "@/constants/Colors";

const renderScene = SceneMap({
  first: AllRequestsTab,
  second: OrderCard,
});

const routes = [
  { key: "first", title: "All" },
  { key: "second", title: "My" },
];

export default function RequestsTabView() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      // sceneContainerStyle={{ backgroundColor: "gray" }}
      renderTabBar={() => tabs(index)}
    />
  );
}

function tabs(activeIndex: number) {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "rgb(18, 18, 18)",
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {routes.map((route, idx) => (
        <View
          key={route.key}
          style={[
            styles.tabsTextContainer,
            activeIndex === idx ? styles.tab_active : null,
          ]}
        >
          <Text style={styles.tabsText}>{route.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabsTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: "100%",
  },
  tab_active: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  tabsText: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "600",
  },
});
