import React, { useContext, useRef } from "react";
import CBBottomSheet from "./CBBottomSheet";
import MyOrderBS, { OrderStatus } from "./bottom_sheet/MyOrderBS";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import OrderInfoCard from "./OrderInfoCard";
import RequestsBS from "./bottom_sheet/RequestsBS";
import { ThemeContext } from "@/contexts/ThemeContext";

const snapPoints = ["25%", "50%"];

export default function RequestCard({
  data,
  myOrderCard,
  status,
}: {
  data?: any;
  status?: OrderStatus;
  myOrderCard?: boolean;
}) {
  const bsref = useRef<BottomSheetModal>(null);

  return (
    <>
      <OrderInfoCard
        data={data}
        status={status}
        onPress={() => bsref.current?.present()}
      />
      {myOrderCard ? (
        status !== "in-process" && (
          <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
            <MyOrderBS status={status} />
          </CBBottomSheet>
        )
      ) : (
        <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
          <RequestsBS infoCardData={data} />
        </CBBottomSheet>
      )}
    </>
  );
}
