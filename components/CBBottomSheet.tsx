import { BackHandler, StyleSheet, Text, View } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetProps,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useMemo, useCallback, forwardRef, useEffect } from "react";

export type Ref = BottomSheetModal;

const CBBottomSheet = forwardRef<Ref, BottomSheetProps>(function CBBottomSheet(
  props,
  ref
) {
  const snapPoints = useMemo(
    () => (props.snapPoints ? props.snapPoints : ["25%", "50%", "90%"]),
    [props.snapPoints]
  );

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        // disappearsOnIndex={1}
        // appearsOnIndex={2}
        // pressBehavior="close"
      />
    ),
    []
  );

  const { dismiss } = useBottomSheetModal();

  useEffect(() => {
    const handleBackButton = () => {
      return dismiss(); // dismiss() returns true/false, it means there is any instance of Bottom Sheet visible on current screen.
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, []);

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: "#1e1e1e" }}
      handleIndicatorStyle={{ backgroundColor: "white" }}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
    >
      <View>{props.children}</View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({});

export default CBBottomSheet;
