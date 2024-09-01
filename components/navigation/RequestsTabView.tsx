import {
  View,
  useWindowDimensions,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { TabView, Route, SceneRendererProps } from "react-native-tab-view";
import { ReactNode, useState } from "react";
import { useStyle } from "@/hooks/useStyle";

interface RequestTabViewProps {
  routes: Route[];
  renderScene: (props: SceneRendererProps & { route: Route }) => ReactNode;
  // tab: "all" | "my";
}

export default function RequestsTabView({
  routes,
  renderScene,
}: // tab,
RequestTabViewProps) {
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
  const styles = useStyle(style);

  return (
    <View style={styles.container}>
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

const style = (Colors: any) =>
  StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: Colors.background,
      height: 50,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    tabsTextContainer: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      height: "100%",
      borderBottomWidth: 2,
      borderBottomColor: "transparent",
    },
    tab_active: {
      borderBottomColor: Colors.text,
    },
    tabsText: {
      color: Colors.text,
      fontSize: 16,
      fontWeight: "600",
    },
  });
