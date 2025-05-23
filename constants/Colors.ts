/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
const tintColorLight = "#000";
const tintColorDark = "#fff";
const primary = "#6728ff";

export const Colors = {
  light: {
    primary,
    text: "#11181C",
    background: "#fff",
    onBackground: "rgb(245, 245, 245)",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    text2: primary,
    rippleColor: "rgba(0, 0, 0, 0.1)",
  },
  dark: {
    primary,
    text: "#ECEDEE",
    background: "#151718",
    onBackground: "rgb(40, 40, 40)",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    text2: "#00e6c4",
    rippleColor: "rgba(255, 255, 255, 0.1)",
  },
};
