import React, { useRef } from "react";
import CBBottomSheet from "./CBBottomSheet";
import MyOrderBS, { MyOrderBSProps } from "./bottom_sheet/MyOrderBS";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import OrderInfoCard from "./OrderInfoCard";

const snapPoints = ["25%", "50%"];

export default function RequestCard({ status }: MyOrderBSProps) {
  const bsref = useRef<BottomSheetModal>(null);

  return (
    <>
      <OrderInfoCard status={status} onPress={() => bsref.current?.present()} />
      {status !== "in-process" && (
        <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
          <MyOrderBS status={status} />
        </CBBottomSheet>
      )}
    </>
  );
}
