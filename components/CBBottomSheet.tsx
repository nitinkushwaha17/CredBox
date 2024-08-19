import { BackHandler, StyleSheet, Text, View } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetProps,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useMemo, useCallback, forwardRef, useEffect } from "react";
import QRCode from "react-native-qrcode-svg";

export type Ref = BottomSheetModal;

const CBBottomSheet = forwardRef<Ref, BottomSheetProps>(function CBBottomSheet(
  props,
  ref
) {
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

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
    >
      <View>
        <Text>Awesome 🔥</Text>
        <QRCode
          value="153235"
          backgroundColor="#1e1e1e"
          color="white"
          size={150}
        />
        {props.children}
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({});

export default CBBottomSheet;
