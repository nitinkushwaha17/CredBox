import React, { useRef } from "react";
import CBBottomSheet from "./CBBottomSheet";
import MyOrderBS, { OrderStatus } from "./bottom_sheet/MyOrderBS";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import OrderInfoCard from "./OrderInfoCard";
import RequestsBS from "./bottom_sheet/RequestsBS";
import { RefContext } from "@/contexts/RefContext";

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
      <OrderInfoCard item={data} onPress={() => bsref.current?.present()} />
      {myOrderCard ? (
        data.status !== "in process" && (
          <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
            <RefContext.Provider value={bsref}>
              <MyOrderBS status={status} infoCardData={data} />
            </RefContext.Provider>
          </CBBottomSheet>
        )
      ) : (
        <CBBottomSheet ref={bsref} snapPoints={snapPoints}>
          <RefContext.Provider value={bsref}>
            <RequestsBS infoCardData={data} />
          </RefContext.Provider>
        </CBBottomSheet>
      )}
    </>
  );
}
