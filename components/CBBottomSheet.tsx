import { BackHandler, StyleSheet, Text, View } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetProps,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useMemo, useCallback, forwardRef, useEffect } from "react";
import { useStyle } from "@/hooks/useStyle";

export type Ref = BottomSheetModal;

const CBBottomSheet = forwardRef<Ref, BottomSheetProps>(function CBBottomSheet(
  props,
  ref
) {
  const styles = useStyle(style);
  const snapPoints = useMemo(
    () => (props.snapPoints ? props.snapPoints : ["25%", "50%", "90%"]),
    [props.snapPoints]
  );

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
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
      backgroundStyle={styles.bsBackgroundStyle}
      handleIndicatorStyle={styles.bsHandleIndicatorStyle}
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
    >
      <View>{props.children}</View>
    </BottomSheetModal>
  );
});

const style = (Colors: any) =>
  StyleSheet.create({
    bsBackgroundStyle: {
      backgroundColor: Colors.background /*"#1e1e1e"*/,
    },
    bsHandleIndicatorStyle: {
      backgroundColor: Colors.icon,
    },
  });

export default CBBottomSheet;
