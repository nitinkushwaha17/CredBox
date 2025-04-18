import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useGlobalStore } from "@/store";

export default function TabLayout() {
  const theme = useGlobalStore((state) => state.theme);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[theme].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors[theme].background,
        },
        sceneStyle: {
          backgroundColor: Colors[theme].background,
        },
        animation: "shift",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="requests"
        options={{
          title: "Requests",
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors[theme].background,
          },
          headerTitleStyle: {
            color: Colors[theme].text,
          },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "git-pull-request" : "git-pull-request-outline"}
              color={color}
            />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors[theme].background,
          },
          headerTitleStyle: {
            color: Colors[theme].text,
          },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "settings" : "settings-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
