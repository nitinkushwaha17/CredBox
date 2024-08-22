import {
  View,
  useWindowDimensions,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { TabView, Route, SceneRendererProps } from "react-native-tab-view";
import { Colors } from "@/constants/Colors";
import { ReactNode, useState } from "react";

interface RequestTabViewProps {
  routes: Route[];
  renderScene: (props: SceneRendererProps & { route: Route }) => ReactNode;
}

export default function RequestsTabView({
  routes,
  renderScene,
}: RequestTabViewProps) {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => (
        <Tabs activeIndex={index} onChange={setIndex} routes={routes} />
      )}
    />
  );
}

interface TabsProps {
  activeIndex: number;
  onChange: (index: number) => void;
  routes: Route[];
}

function Tabs({ activeIndex, onChange, routes }: TabsProps) {
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
        <Pressable
          key={route.key}
          style={[
            styles.tabsTextContainer,
            activeIndex === idx ? styles.tab_active : null,
          ]}
          onPress={() => onChange(idx)}
        >
          <Text style={styles.tabsText}>{route.title}</Text>
        </Pressable>
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
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tab_active: {
    borderBottomColor: "white",
  },
  tabsText: {
    color: Colors.dark.text,
    fontSize: 16,
    fontWeight: "600",
  },
});
