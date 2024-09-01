import React, { useContext, useRef } from "react";
import CBBottomSheet from "./CBBottomSheet";
import MyOrderBS, { MyOrderBSProps } from "./bottom_sheet/MyOrderBS";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import OrderInfoCard from "./OrderInfoCard";
import RequestsBS from "./bottom_sheet/RequestsBS";
import { ThemeContext } from "@/app/_layout";

const snapPoints = ["25%", "50%"];

export default function RequestCard({
  myOrderCard,
  status,
}: MyOrderBSProps & { myOrderCard?: boolean }) {
  const { theme } = useContext(ThemeContext);
  const bsref = useRef<BottomSheetModal>(null);

  return (
    <>
      <OrderInfoCard status={status} onPress={() => bsref.current?.present()} />
      {myOrderCard ? (
        status !== "in-process" && (
          <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
            <MyOrderBS status={status} theme={theme} />
          </CBBottomSheet>
        )
      ) : (
        <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
          <RequestsBS theme={theme} />
        </CBBottomSheet>
      )}
    </>
  );
}
