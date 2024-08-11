import { StyleSheet, Text, View } from "react-native";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef, useMemo, useCallback, ForwardedRef, forwardRef } from "react";
import QRCode from "react-native-qrcode-svg";
export type Ref = BottomSheetModal;

const CBBottomSheet = forwardRef<Ref>(function CBBottomSheet(_, ref: any) {
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
  // const handleSnapPress = useCallback((index: number) => {
  //   sheetRef.current?.snapToIndex(index);
  // }, []);
  // const handleClosePress = useCallback(() => {
  //   sheetRef.current?.close();
  // }, []);
  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
    >
      <View>
        <Text>Awesome 🔥</Text>
        <QRCode value="153235" />
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({});

export default CBBottomSheet;
