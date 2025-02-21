import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  active: boolean;
  cardName: string;
  cardNumber: string;
  expireDate: string;
  cardImage: string;
  onSelect: () => void;
}

export const PaymentMethodCard: React.FC<Props> = ({
  active,
  cardImage,
  cardNumber,
  expireDate,
  onSelect,
  cardName,
}) => {
  return (
    <div
      onClick={onSelect}
      className={cn(
        " w-full h-14 px-6 border-black/30 border rounded-full relative",
        active && "border-green-800"
      )}
    >
      <div
        className={cn(
          " absolute flex items-center justify-center w-4 h-4 border z-10 -left-2 rounded-full bg-white border-zinc-400 bottom-[35%]",
          active && "border-green-800 w-"
        )}
      >
        <div
          className={cn(
            " w-2 h-2 bg-zinc-400 rounded-full",
            active && "bg-green-800"
          )}
        ></div>
      </div>

      <div className="flex w-full h-full justify-between items-center">
        <div className="flex gap-4 items-center">
          <img src={cardImage} className=" w-12 h-6" />
          <h5 className="font-bold text-xs md:text-lg">
            {cardName} {cardNumber}
          </h5>
        </div>
        <p className="text-xs md:text-lg text-black/70">
          Expires on {expireDate}
        </p>
      </div>
    </div>
  );
};
